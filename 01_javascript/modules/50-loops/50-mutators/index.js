export default (str, n) => {
  let result = "";
  for (let i = 0; i < str.length; i += 1)
    result += (i + 1) % n === 0 ? str[i].toUpperCase() : str[i];
  return result;
};
