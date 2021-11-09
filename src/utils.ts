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