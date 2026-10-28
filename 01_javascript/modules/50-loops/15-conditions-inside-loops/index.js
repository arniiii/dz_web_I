export default (str, char) => {
  let count = 0;
  for (const value of str.toLowerCase())
    if (value === char.toLowerCase()) count += 1;
  return count;
};
