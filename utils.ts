import { useState } from "react";
import { useCookies } from "react-cookie";

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


export function useColorCheckList() {
  const [cookies, setCookie, removeCookie] = useCookies(["color-check-list"]);

  console.log("useColorCheckList", cookies, cookies["color-check-list"]);

  const defaultColorCheckList = cookies["color-check-list"] ? JSON.parse(cookies["color-check-list"]) : [];

  const [_colorCheckList, _setColorCheckList] = useState(defaultColorCheckList as string[]);

  const setColorCheckList = () => { }
}
