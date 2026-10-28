const isPrime = (number) => {
  if (!Number.isInteger(number) || number < 2) return false;
  for (let divisor = 2; divisor * divisor <= number; divisor += 1)
    if (number % divisor === 0) return false;
  return true;
};
export default (number) => console.log(isPrime(number) ? "yes" : "no");
