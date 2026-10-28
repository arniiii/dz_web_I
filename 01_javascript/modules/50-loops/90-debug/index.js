export default (str) => {
  let result = "";
  let index = 0;
  while (index < str.length) {
    const char = str[index];
    let end = index + 1;
    while (end < str.length && str[end] === char) end += 1;
    const count = end - index;
    result += char + (count === 1 ? "" : count);
    index = end;
  }
  return result;
};
