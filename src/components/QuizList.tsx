import React, { useEffect, useMemo, useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { useColorAchieves } from '../hooks/color_achieves';
import FilterButton from "./FilterButton";
import QuizItem from './QuizItem';
import { getShuffledArr } from '../utils';
import { useColorData } from '../hooks/color_data';
import * as gtag from '../lib/gtag';

const QuizList = ({ level = 2 }) => {
  // 「ブックマークのみ表示」フィルター
  const [isOnlyCheck, setIsOnlyCheck] = useState(false);

  // 「高難易度」フィルター
  const [isHard, setIsHard] = useState(false);
  // 正解数
  const [correctCount, setCorrectCount] = useState(0);
  // 回答数
  const [answerCount, setAnswerCount] = useState(0);
  // 各色の達成情報
  const [colorAchieves, setColorAchieves, isSetCookie] = useColorAchieves(level);

  // 10問表示する
  const [isReduce, setIsReduce] = useState(false);

  // 問題をリフレッシュする時に使用する
  const [refreshCount, setRefreshCount] = useState(0);

  const [colorDataList] = useColorData(level);
  const allColorIds = colorDataList.map(color => color.id);

  const displayQuizIds = useMemo(() =>
    getShuffledArr(allColorIds).filter((id: number) => !isOnlyCheck || colorAchieves[id].isChecked).slice(0, isReduce ? 10 : allColorIds.length),
    [isOnlyCheck, isReduce, refreshCount]
  );

  useEffect(() => {
    setCorrectCount(0);
    setAnswerCount(0);
  }, [isHard, isOnlyCheck, isReduce, refreshCount]);

  return (
    <>
      <div className="mb-8 flex items-baseline">
        <div className="pt-1">
          <SettingsIcon className="mr-2 text-gray-400" />
        </div>
        <div>
          <span className="whitespace-nowrap">
            <FilterButton className="mb-1 rounded-r-none border-r-0" active={!isReduce} onClick={() => {
              setIsReduce(false)
              gtag.event({ action: "click", category: "filter", label: "reduce", value: "1" })
            }}>全問</FilterButton>
            <FilterButton className="mr-2 mb-1 rounded-l-none border-l-0" active={isReduce} onClick={() => {
              setIsReduce(true)
              gtag.event({ action: "click", category: "filter", label: "reduce", value: "0" })
            }}>10問</FilterButton>
          </span>
          <FilterButton className="mr-2 mb-1" active={isOnlyCheck} onClick={() => {
            setIsOnlyCheck(!isOnlyCheck)
            gtag.event({ action: "click", category: "filter", label: "bookmark", value: isOnlyCheck ? "0" : "1" })
          }}>ブックマークのみ</FilterButton>
          <FilterButton className="mr-2 mb-1" active={isHard} onClick={() => {
            setIsHard(!isHard)
            gtag.event({ action: "click", category: "filter", label: "hard", value: isHard ? "0" : "1" })
          }}>高難易度</FilterButton>
        </div>.
      </div>
      <div className="py-6 px-4 lg:px-8 bg-white rounded-2xl">

        <h2 className="text-xl text-gray-800 text-center font-bold mb-4">正しい色を選択してください。</h2>

        {isSetCookie && displayQuizIds.map((quizId: number, index: number) => {
          return <QuizItem
            key={quizId}
            isHard={isHard}
            level={level}
            quizId={quizId}
            index={index + 1}
            refreshCount={refreshCount}
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
            onClick={() => { setRefreshCount(refreshCount + 1); window.scrollTo({ top: 0 }); }}
          >
            再挑戦する
          </button>
        </div>}

      </div>
    </>
  )
};

export default QuizList;