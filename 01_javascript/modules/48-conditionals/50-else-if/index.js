export default (color) => {
  if (color === "green") return "go";
  if (color === "yellow") return "slow down";
  if (color === "red") return "stop";
  return "unknown";
};
