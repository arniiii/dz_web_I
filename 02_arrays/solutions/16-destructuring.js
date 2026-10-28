const distance = ([x, y], [a, b]) => Math.hypot(x - a, y - b);
export const getTheNearestLocation = (locations, point) => {
  let best = null;
  let minimum = Infinity;
  for (const location of locations) {
    const [, coordinates] = location;
    const current = distance(coordinates, point);
    if (current < minimum) {
      minimum = current;
      best = location;
    }
  }
  return best;
};
