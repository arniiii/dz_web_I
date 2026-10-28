export default (n) => {
  let result = "";
  for (let i = 1; i <= n; i += 1) {
    let word = "";
    if (i % 3 === 0) word += "Fizz";
    if (i % 5 === 0) word += "Buzz";
    result += (i === 1 ? "" : " ") + (word || i);
  }
  return result;
};
