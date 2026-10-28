export default (wallet, currency) => {
  let total = 0;
  for (const banknote of wallet) {
    if (banknote.slice(0, 3) !== currency) continue;
    total += Number(banknote.slice(4));
  }
  return total;
};
