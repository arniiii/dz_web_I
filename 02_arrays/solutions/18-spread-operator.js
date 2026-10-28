export const flatten = (items) => {
  const result = [];
  for (const value of items) {
    if (Array.isArray(value)) result.push(...value);
    else result.push(value);
  }
  return result;
};
