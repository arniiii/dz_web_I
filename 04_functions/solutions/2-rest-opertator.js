export default (...numbers) =>
  numbers.length === 0
    ? null
    : numbers.reduce((a, b) => a + b, 0) / numbers.length;
