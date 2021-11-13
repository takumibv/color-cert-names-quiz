import React, { HTMLAttributes, useEffect, useMemo, useState } from 'react';
import * as munsell from 'munsell';
import classNames from 'classnames';
import Check from '@mui/icons-material/Check';
import Clear from '@mui/icons-material/Clear';
import { ColorAchieveMapType } from '../hooks/color_achieves';
import ColorListItem from './ColorListItem';
import { getShuffledArr } from '../utils';
import { useColorData } from '../hooks/color_data';
import * as gtag from '../lib/gtag';

interface QuizItemProps extends HTMLAttributes<HTMLDivElement> {
  level?: number;
  quizId: number;
  index: number;
  refreshCount?: number;
  isHard?: boolean;
  onCorrect?: () => void;
  onIncorrect?: () => void;
  colorAchieves: ColorAchieveMapType;
  setColorAchieves: (newColorAchieve: ColorAchieveMapType) => void
}

const QuizItem = ({
  level = 2,
  quizId,
  index,
  refreshCount = 0,
  isHard = false,
  children,
  className,
  onCorrect,
  onIncorrect,
  colorAchieves,
  setColorAchieves,
  ...props
}: QuizItemProps) => {
  const [isOpenCorrect, setIsOpenCorrect] = useState(false);
  const [choiceId, setChoiceId] = useState<number | boolean>(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const [colorDataList, getNormalChoiceIds, getHardChoiceIds] = useColorData(level);

  useEffect(() => {
    setIsCorrect(quizId === choiceId);
  }, [choiceId]);

  useEffect(() => {
    setIsOpenCorrect(false);
  }, [isHard, index, refreshCount, quizId]);

  // 各色の達成情報
  const targetColor = colorDataList.find(c => c.id === quizId);
  const choiceIds = useMemo(() => isHard ? getHardChoiceIds(quizId) : getNormalChoiceIds(quizId), [isHard, refreshCount]);

  if (!targetColor) return null;

  return (
    <div className={classNames("relative", className)} {...props}>
      <h3 className="mb-3">
        <span className="inline-block text-2xl mr-3 text-blue-300">Q{index}</span>
        <span className="font-bold text-xl leading-8">{targetColor.name}</span>

        {isOpenCorrect &&
          <span className="inline-block ml-3 text-3xl">
            {isCorrect ? <Check className="text-green-500" /> : <Clear className="text-red-500" />}
          </span>}
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {choiceIds.map((id: number) => {
          const color = colorDataList.find(c => c.id === id);

          if (!color) return null;

          const colorAchieve = colorAchieves[id];
          const isChoice = choiceId === id;

          return <div key={id} className="relative">
            {isOpenCorrect ?
              <>
                <ColorListItem
                  paletteStyle={{
                    boxShadow: isChoice ? `0 0 3px 3px #aaa` : "none",
                  }}
                  id={`${color.id}`}
                  name={color.name}
                  yomi={color.yomi}
                  code={color.code}
                  explain={""}
                  checked={colorAchieve.isChecked}
                  pass={colorAchieve.pass}
                  total={colorAchieve.total}
                  onChecked={() => setColorAchieves({
                    ...colorAchieves,
                    [`${color.id}`]: {
                      ...colorAchieve,
                      isChecked: !colorAchieve.isChecked,
                    }
                  })} />
                <div className={classNames("absolute left-0 top-0 rounded-bl-md p-2")}>
                  <div className="flex justify-center items-center bg-white rounded-full p-1">
                    {quizId === color.id
                      ? <Check className="text-green-500" />
                      : <Clear className="text-red-500" />}
                  </div>
                </div>
              </>
              : <div
                className={classNames(
                  "align-middle h-24 rounded-lg border",
                  !isOpenCorrect && "cursor-pointer hover:opacity-90",
                )}
                style={{ background: color.code }}
                onClick={() => {
                  setIsOpenCorrect(true);
                  setChoiceId(id);

                  gtag.event({ action: "click", category: "answer", label: targetColor.code, value: color.code })

                  if (quizId === id) {
                    onCorrect && onCorrect();
                  } else {
                    onIncorrect && onIncorrect();
                  }

                  const targetColorAchieve = colorAchieves[quizId];
                  if (!targetColorAchieve) return;

                  setColorAchieves({
                    ...colorAchieves,
                    [`${quizId}`]: {
                      ...targetColorAchieve,
                      total: (targetColorAchieve.total || 0) + 1,
                      pass: (targetColorAchieve.pass || 0) + (quizId === id ? 1 : 0)
                    }
                  });
                }}
              >
              </div>}
          </div>
        })}
      </div>
    </div>
  )
};

export default QuizItem;