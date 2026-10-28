import _ from "lodash";
export default (text) => {
  const counts = {};
  for (const word of _.words(text.toLowerCase())) {
    Object.defineProperty(counts, word, {
      value: (Object.hasOwn(counts, word) ? counts[word] : 0) + 1,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }
  return counts;
};
