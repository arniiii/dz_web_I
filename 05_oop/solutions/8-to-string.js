export function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.getX = function () {
  return this.x;
};
Point.prototype.getY = function () {
  return this.y;
};
Point.prototype.toString = function () {
  return `(${this.getX()}, ${this.getY()})`;
};
export function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
}
Segment.prototype.getBeginPoint = function () {
  return this.beginPoint;
};
Segment.prototype.getEndPoint = function () {
  return this.endPoint;
};
Segment.prototype.toString = function () {
  return `[${this.getBeginPoint()}, ${this.getEndPoint()}]`;
};
