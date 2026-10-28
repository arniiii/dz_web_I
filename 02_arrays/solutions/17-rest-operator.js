export const getMax = (items) => {
  if (items.length === 0) return null;
  const [first, ...rest] = items;
  let maximum = first;
  for (const value of rest) if (value > maximum) maximum = value;
  return maximum;
};
