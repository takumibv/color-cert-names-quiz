import React, { useMemo, useState } from 'react';
import { getShuffledArr, useColorAchieves } from '../utils';
import FilterButton from "./FilterButton";
import QuizItem from './QuizItem';
import colors from "../static_data/colors";

const allColorIds = colors.map(color => color.id);

const QuizList = () => {
  // 「ブックマークのみ表示」フィルター
  const [isOnlyCheck, setIsOnlyCheck] = useState(false);
  // 正解数
  const [correctCount, setCorrectCount] = useState(0);
  // 回答数
  const [answerCount, setAnswerCount] = useState(0);
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
          onCorrect={() => {
            setAnswerCount(answerCount + 1);
            setCorrectCount(correctCount + 1);
          }}
          onIncorrect={() => { setAnswerCount(answerCount + 1); }}
          className="mb-8" />
      })}

      {displayQuizIds.length === 0 && <div className="mb-4">
        <p className="text-center text-gray-400">ブックマークはありません。</p>
      </div>}

      {displayQuizIds.length !== 0 && displayQuizIds.length === answerCount &&
        <div className="my-8">
          <p className="text-center text-gray-600">
            <span className="inline-block text-xl mr-2">正解数</span>
            <span className="text-4xl">{correctCount}</span>
            <span className="inline-block text-xl mx-2">/</span>
            <span className="text-3xl">{answerCount}</span>
          </p>
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