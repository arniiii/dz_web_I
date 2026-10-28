export default (first: number, ...rest: number[]): number =>
  Math.max(first, ...rest);
