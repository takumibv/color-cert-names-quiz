import React, { HTMLAttributes, useEffect, useMemo, useState } from 'react';
import * as munsell from 'munsell';
import classNames from 'classnames';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import { getShuffledArr, useColorAchieves } from '../utils';
import colors from "../static_data/colors";
import ColorListItem from './ColorListItem';

// 全ての選択肢
const allChoices = colors.map(color => color.id);

interface QuizItemProps extends HTMLAttributes<HTMLDivElement> {
  quizId: number;
  isHard?: boolean;
  onCorrect?: () => void;
  onIncorrect?: () => void;
}

const QuizItem = ({
  quizId,
  isHard = false,
  children,
  className,
  ...props
}: QuizItemProps) => {
  const [isOpenCorrect, setIsOpenCorrect] = useState(false);

  // 各色の達成情報
  const [colorAchieves, setColorAchieves, isSetCookie] = useColorAchieves();
  const targetColor = colors.find(c => c.id === quizId);
  const choiceIds = useMemo(() => getShuffledArr(Array.from(new Set([quizId, ...getShuffledArr(allChoices).slice(0, 4)])).slice(0, 4)), []);

  if (!targetColor || !isSetCookie) return null;

  return (
    <div className={classNames("relative", className)} {...props}>
      <h3 className="font-bold mb-2 text-xl">{targetColor.name}</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {choiceIds.map((id: number) => {
          const color = colors.find(c => c.id === id);

          if (!color) return null;

          const colorAchieve = colorAchieves[color.id];

          return <div key={id} className="relative">
            {isOpenCorrect ?
              <>
                <ColorListItem
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
                onClick={() => { setIsOpenCorrect(true) }}
              >
              </div>}
          </div>
        })}
      </div>
    </div>
  )
};

export default QuizItem;