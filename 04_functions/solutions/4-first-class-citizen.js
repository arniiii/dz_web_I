export default (text) => {
  const takeLast = (source, count) =>
    source.length < count ? null : [...source.slice(-count)].reverse().join("");
  return takeLast(text, 4);
};
