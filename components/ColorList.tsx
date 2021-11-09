import React, { useEffect, useState } from 'react';
import colors from "../static_data/colors";
import { getShuffledArr, initialColorData, useColorAchieves } from '../utils';
import ColorListItem from './ColorListItem';
import FilterButton from "./FilterButton";

const ColorList = () => {
  // 「色を隠す」フィルター
  const [isHideColor, _setIsHideColor] = useState(false);
  // 「名前を隠す」フィルター
  const [isHideName, _setIsHideName] = useState(false);

  const setIsHideColor = (newValue: boolean) => {
    _setIsHideColor(newValue);
    if (isHideName) _setIsHideName(false);
  };

  const setIsHideName = (newValue: boolean) => {
    _setIsHideName(newValue);
    if (isHideColor) _setIsHideColor(false);
  };

  // 「ランダムに並べる」フィルター
  const [isRandom, setIsRandom] = useState(false);
  // 「ブックマークのみ表示」フィルター
  const [isOnlyCheck, setIsOnlyCheck] = useState(false);

  // 表示用に整列された色配列
  const [displayColors, setDisplayColors] = useState(colors);

  // 各色の達成情報
  const [colorAchieves, setColorAchieves, isSetCookie] = useColorAchieves();

  useEffect(() => {
    if (isRandom) {
      setDisplayColors(getShuffledArr(colors));
    } else {
      setDisplayColors(colors);
    }
  }, [isRandom]);

  return (
    <div className="py-6 px-4 bg-white rounded-2xl">
      <h2 className="text-xl text-gray-800 text-center font-bold mb-4">色名一覧</h2>

      <div className="mb-8">
        <FilterButton className="mr-2 mb-1" active={isRandom} onClick={() => setIsRandom(!isRandom)}>ランダムに並べる</FilterButton>
        <FilterButton className="mr-2 mb-1" active={isHideColor} onClick={() => setIsHideColor(!isHideColor)}>色を隠す</FilterButton>
        <FilterButton className="mr-2 mb-1" active={isHideName} onClick={() => setIsHideName(!isHideName)}>名前を隠す</FilterButton>
        <FilterButton className="mr-2 mb-1" active={isOnlyCheck} onClick={() => setIsOnlyCheck(!isOnlyCheck)}>ブックマークのみ表示する</FilterButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {displayColors.map(color => {
          const colorAchieve = colorAchieves[`${color.id}`];
          if (isOnlyCheck && !colorAchieve.isChecked) return null;

          return <ColorListItem
            key={`color-${color.code}`}
            className="mb-4"
            id={`${color.id}`}
            name={color.name}
            yomi={color.yomi}
            code={color.code}
            explain={color.explain}
            checked={colorAchieve.isChecked}
            pass={colorAchieve.pass}
            total={colorAchieve.total}
            onChecked={() => setColorAchieves({
              ...colorAchieves,
              [`${color.id}`]: {
                ...colorAchieve,
                isChecked: !colorAchieve.isChecked,
              }
            })}
            isHideColor={isHideColor}
            isHideName={isHideName} />
        })}
      </div>
      {isOnlyCheck && !displayColors.some(c => colorAchieves[`${c.id}`].isChecked) && <div className="mt-6">
        <p className="text-center text-gray-400">ブックマークはありません。</p>
      </div>}
      {/* ブックマークのみ表示する場合、ブックマーク以外の色も表示する */}
      {isOnlyCheck && <div className="mt-20">
        <h2 className="text-xl text-gray-800 font-bold mb-4">その他の色</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayColors.map(color => {
            const colorAchieve = colorAchieves[`${color.id}`];
            if (colorAchieve.isChecked) return null;

            return <ColorListItem
              key={`color-${color.code}`}
              className="mb-4"
              id={`${color.id}`}
              name={color.name}
              yomi={color.yomi}
              code={color.code}
              explain={color.explain}
              checked={colorAchieve.isChecked}
              onChecked={() => setColorAchieves({
                ...colorAchieves,
                [`${color.id}`]: {
                  ...colorAchieve,
                  isChecked: !colorAchieve.isChecked,
                }
              })}
              isHideColor={isHideColor}
              isHideName={isHideName} />
          })}
        </div>
      </div>}

      {/* ブックマーク・回答履歴のリセット */}
      <div className="text-right mt-8">
        <a
          className="text-sm text-gray-400 cursor-pointer hover:opacity-80 underline"
          tabIndex={0}
          onClick={() => {
            if (confirm("ブックマークと回答履歴を削除してよろしいですか？ この操作は取り消せません。")) {
              setColorAchieves(initialColorData);
            }
          }}
        >
          ブックマーク・回答履歴のリセット
        </a>
      </div>
    </div>
  )
};

export default ColorList;