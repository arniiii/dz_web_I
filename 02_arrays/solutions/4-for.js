export default (items, prefix) => {
  const result = [];
  for (let i = 0; i < items.length; i += 1)
    result.push(`${prefix} ${items[i]}`);
  return result;
};
