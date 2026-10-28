export default (items) => {
  if (items.length === 0) return null;
  let total = 0;
  for (const value of items) total += value;
  return total / items.length;
};
