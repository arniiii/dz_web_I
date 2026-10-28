export default (scores) => {
  let balance = 0;
  for (const [canada, ussr] of scores) balance += Math.sign(canada - ussr);
  return balance === 0 ? null : balance > 0 ? "canada" : "ussr";
};
