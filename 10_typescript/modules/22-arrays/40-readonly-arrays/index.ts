export default (items: readonly number[]): number[] => {
  const result: number[] = [];
  for (let i = items.length - 1; i >= 0; i -= 1) result.push(items[i]);
  return result;
};
