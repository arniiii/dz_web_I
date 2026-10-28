export default (text, stops) =>
  text
    .split(" ")
    .map((word) => (stops.includes(word) ? "$#%!" : word))
    .join(" ");
