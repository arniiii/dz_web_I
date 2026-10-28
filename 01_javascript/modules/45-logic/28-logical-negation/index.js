const isPalindrome = (str) =>
  str.toLowerCase() === [...str.toLowerCase()].reverse().join("");
const isNotPalindrome = (str) => !isPalindrome(str);
export default isNotPalindrome;
export { isPalindrome, isNotPalindrome };
