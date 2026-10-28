export default (str, char) => {
  let result = "";
  for (const value of str) if (value !== char) result += value;
  return result;
};
