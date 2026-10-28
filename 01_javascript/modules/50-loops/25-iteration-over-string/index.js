export default (str) => {
  let result = "";
  for (let i = 0; i < str.length; i += 1)
    result += i < str.length - 4 ? "*" : str[i];
  return result;
};
