export default (a, b) =>
  ["name", "state", "website"].every((key) => a[key] === b[key]);
