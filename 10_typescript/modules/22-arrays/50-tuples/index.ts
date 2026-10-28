export type Point = [number, number, number];
export default (a: Point, b: Point): boolean =>
  a.every((coordinate, index) => coordinate === b[index]);
