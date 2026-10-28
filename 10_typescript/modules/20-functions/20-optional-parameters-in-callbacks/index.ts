export default (
  numbers: number[],
  callback: (value: number, index: number) => number
): number[] => numbers.map(callback);
