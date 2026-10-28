export const calculateSum = (items) => {
  let total = 0;
  for (const value of items) if (value % 3 === 0) total += value;
  return total;
};
