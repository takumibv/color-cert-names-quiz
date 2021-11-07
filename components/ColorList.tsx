import * as munsell from 'munsell';
import React, { useEffect, useState } from 'react';
import colors from "../data/colors";
import { getShuffledArr, useColorCheckList } from '../utils';
import ColorListItem from './ColorListItem';
import FilterButton from "./FilterButton";

// 全ての選択肢
const allChoices = colors.map(color => color.code);

export default () => {
  const [isHideColor, setIsHideColor] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [isOnlyCheck, setIsOnlyCheck] = useState(false);
  const [displayColors, setDisplayColors] = useState(colors);

  // useColorCheckList();

  useEffect(() => {
    if (isRandom) {
      setDisplayColors(getShuffledArr(colors));
    } else {
      setDisplayColors(colors);
    }
  }, [isRandom]);

  return (
    <>
      <h2 className="text-xl text-gray-800 text-center font-bold mb-4">色名一覧</h2>

      <div className="my-6">
        <FilterButton className="mr-2" active={isHideColor} onClick={() => setIsHideColor(!isHideColor)}>色を隠す</FilterButton>
        <FilterButton className="mr-2" active={isRandom} onClick={() => setIsRandom(!isRandom)}>ランダムに並べる</FilterButton>
        <FilterButton className="mr-2" active={isOnlyCheck} onClick={() => setIsOnlyCheck(!isOnlyCheck)}>チェックのみ表示する</FilterButton>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4  gap-4">

        {displayColors.map(color => (
          <ColorListItem
            key={`color-${color.code}`}
            className="mb-6"
            id={`${color.id}`}
            name={color.name}
            yomi={color.yomi}
            code={color.code}
            explain={color.explain}
            isHideColor={isHideColor} />
        ))}
      </div>
    </>
  )
};
