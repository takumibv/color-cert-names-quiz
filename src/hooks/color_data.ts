
import colors from "../../static_data/colors";
import colors_3 from "../../static_data/colors3";
import { getShuffledArr } from "../utils";

/**
 * 色のデータ
 */
export type ColorDataType = {
  id: number;
  name: string;
  yomi: string;
  explain: string;
  code: string;
  category?: string;
}

/**
 * 色の達成情報の使用
 * @returns ColorDataType[]
 */
export function useColorData(level: number = 2): [ColorDataType[], (id: number) => number[], (id: number) => number[]] {
  const data = level === 2 ? colors : colors_3;

  const getNormalChoiceIds = (targetId: number): number[] => {
    const choices = getShuffledArr(
      Array.from(new Set([
        targetId,
        ...getShuffledArr(data).slice(0, 4).map((d: ColorDataType) => d.id),
      ])).slice(0, 4)
    );
    return choices;
  };

  const getHardChoiceIds = (targetId: number): number[] => {
    const targetColor = data.find(color => color.id === targetId);
    const choices = getShuffledArr(
      Array.from(new Set([
        targetId,
        ...getShuffledArr(data.filter(color => color.category === targetColor?.category)).slice(0, 4).map((d: ColorDataType) => d.id),
      ])).slice(0, 4)
    );
    return choices.length < 4 ? getNormalChoiceIds(targetId) : choices;
  };

  return [data, getNormalChoiceIds, getHardChoiceIds];
}