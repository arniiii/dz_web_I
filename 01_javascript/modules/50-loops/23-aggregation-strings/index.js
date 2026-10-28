export default (str) => {
  let result = "";
  for (const char of str) if (!" ()-".includes(char)) result += char;
  return result;
};
