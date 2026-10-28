export default (
  numbers: number[],
  predicate: (number: number) => boolean
): number[] => numbers.filter(predicate);
