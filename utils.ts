import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import colors from "./static_data/colors";

/**
 * 配列をシャッフルする(Immutable)
 * @param arr 
 * @returns 
 */
export function getShuffledArr(arr: any[]) {
  return arr.reduce(
    (newArr, _, i) => {
      var rand = i + (Math.floor(Math.random() * (newArr.length - i)));
      [newArr[rand], newArr[i]] = [newArr[i], newArr[rand]]
      return newArr
    }, [...arr]
  )
}

const COLOR_ARCHIEVE_COOKIE_NAME = "color-achieves";

/**
 * 色の達成情報
 * ブックマーク、総出題数、正解数
 */
export type ColorAchieveType = {
  isChecked?: boolean;
  total?: number;
  pass?: number;
}
export type ColorAchieveMapType = {
  [key: string]: ColorAchieveType
}

const initialColorData: ColorAchieveMapType = colors.reduce((result, current, index) => {
  result[current.id] = {
    isChecked: false,
    total: 0,
    pass: 0,
  };
  return result;
}, {} as ColorAchieveMapType);

/**
 * cookieに保存するためのデータに変換する
 * @param rawData 
 * @returns 
 */
const serializeColorData = (rawData: ColorAchieveMapType) => Object.keys(rawData).reduce((result, currentId, index) => {
  const current = rawData[currentId];
  result[`${currentId}`] = [
    current.isChecked ? 1 : 0,
    current.total || 0,
    current.pass || 0,
  ];
  return result;
}, {} as { [key: string]: [number, number, number] });

/**
 * cookieのデータをプログラム用に変換する
 * @param serializedData 
 * @returns ColorAchieveMapType
 */
const deserializeColorData = (serializedData: { [key: string]: [number, number, number] }): ColorAchieveMapType =>
  Object.keys(serializedData).reduce((result, currentId, index) => {
    const current = serializedData[currentId];
    result[`${currentId}`] = {
      isChecked: !!current[0],
      total: current[1],
      pass: current[2],
    };
    return result;
  }, {} as ColorAchieveMapType);

/**
 * 色の達成情報の使用
 * @returns 
 */
export function useColorAchieves(): [ColorAchieveMapType, (newColorAchieve: ColorAchieveMapType) => void, boolean] {
  const [cookies, setCookie, removeCookie] = useCookies([COLOR_ARCHIEVE_COOKIE_NAME]);
  const [_colorAchieves, _setColorAchieves] = useState(initialColorData);
  const [_isSetCookie, _setIsSetCookie] = useState(false);

  const setColorAchieves = (newColorAchieve: ColorAchieveMapType) => {
    _setColorAchieves(newColorAchieve);
    setCookie(COLOR_ARCHIEVE_COOKIE_NAME, serializeColorData(newColorAchieve), { path: '/', maxAge: 30 * 60 * 24 });
  }

  useEffect(() => {
    let storedColorAchieves: ColorAchieveMapType;
    try {
      storedColorAchieves = cookies[COLOR_ARCHIEVE_COOKIE_NAME]
        ? deserializeColorData(cookies[COLOR_ARCHIEVE_COOKIE_NAME])
        : initialColorData;
    } catch (e) {
      removeCookie(COLOR_ARCHIEVE_COOKIE_NAME);
      storedColorAchieves = initialColorData;
    }
    setColorAchieves(storedColorAchieves);
    _setIsSetCookie(true);
  }, [])

  return [_colorAchieves, setColorAchieves, _isSetCookie];
}

