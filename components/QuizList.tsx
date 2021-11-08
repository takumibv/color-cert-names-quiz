import * as munsell from 'munsell';
import React, { useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
import FilterList from '@material-ui/icons/FilterList';
import { getShuffledArr, useColorAchieves } from '../utils';
import ColorListItem from './ColorListItem';
import FilterButton from "./FilterButton";
import QuizItem from './QuizItem';
import colors from "../static_data/colors";
import Link from 'next/link';
import { isWidthDown } from '@material-ui/core';

const allColorIds = colors.map(color => color.id);

const QuizList = () => {
  // 「ブックマークのみ表示」フィルター
  const [isOnlyCheck, setIsOnlyCheck] = useState(false);
  // 各色の達成情報
  const [colorAchieves, setColorAchieves, isSetCookie] = useColorAchieves();

  const displayQuizIds = useMemo(() =>
    getShuffledArr(allColorIds).filter((id: number) => !isOnlyCheck || colorAchieves[id].isChecked), [isOnlyCheck]);

  return (
    <div className="py-6 px-4 lg:px-8 bg-white rounded-2xl">
      <div className="mb-8">
        <FilterButton className="mr-2 mb-1" active={isOnlyCheck} onClick={() => setIsOnlyCheck(!isOnlyCheck)}>ブックマークのみ出題する</FilterButton>
      </div>

      <h2 className="text-xl text-gray-800 text-center font-bold mb-4">正しい色を選択してください。</h2>

      {isSetCookie && displayQuizIds.map((quizId: number, index: number) => {
        return <QuizItem
          key={quizId}
          quizId={quizId}
          index={index + 1}
          colorAchieves={colorAchieves}
          setColorAchieves={setColorAchieves}
          className="mb-8" />
      })}

      {displayQuizIds.length === 0 && <div className="">
        <p className="text-center text-gray-400 mb-4">ブックマークはありません。</p>
      </div>}

      {displayQuizIds.length !== 0 && <div className="text-center my-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white rounded-md py-2 px-4"
          onClick={() => { window.location.reload() }}
        >
          再挑戦する
        </button>
      </div>}

    </div>
  )
};

export default QuizList;