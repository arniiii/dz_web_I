export default function magic(...numbers) {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const next = (...args) => magic(sum, ...args);
  next.valueOf = () => sum;
  return next;
}
