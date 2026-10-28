export default (
  numbers: number[],
  callback: (value: number, index: number) => void
): void => {
  numbers.forEach(callback);
};
