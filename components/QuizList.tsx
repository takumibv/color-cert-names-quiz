import * as munsell from 'munsell';
import React, { useEffect, useMemo, useState } from 'react';
import { useCookies } from 'react-cookie';
// import colors from "../static_data/colors";
import { getShuffledArr, useColorAchieves } from '../utils';
import ColorListItem from './ColorListItem';
import FilterButton from "./FilterButton";
import QuizItem from './QuizItem';
import colors from "../static_data/colors";

const allColorIds = colors.map(color => color.id);

const QuizList = () => {
  const quizIds = useMemo(() => getShuffledArr(allColorIds), []);

  return (
    <div className="py-6 px-4 lg:px-8 bg-white rounded-2xl">
      <h2 className="text-xl text-gray-800 text-center font-bold mb-4">正しい色を選択してください。</h2>

      {quizIds.map((quizId: number) => <QuizItem key={quizId} quizId={quizId} className="mb-6" />)}

    </div>
  )
};

export default QuizList;