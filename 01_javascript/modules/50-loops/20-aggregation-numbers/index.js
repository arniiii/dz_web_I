export default (usage) => {
  let total = 0;
  for (let kwh = 1; kwh <= usage; kwh += 1)
    total += kwh <= 100 ? 5 : kwh <= 200 ? 7 : 10;
  return total;
};
