export default (number) => {
  if (number === 1) return 1;
  for (let divisor = 2; divisor * divisor <= number; divisor += 1)
    if (number % divisor === 0) return divisor;
  return number;
};
