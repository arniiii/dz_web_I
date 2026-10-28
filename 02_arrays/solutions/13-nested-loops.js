export default (left, right) => {
  const seen = [];
  for (const item of left) {
    if (seen.includes(item)) continue;
    for (const other of right) {
      if (item === other) {
        seen.push(item);
        break;
      }
    }
  }
  return seen.length;
};
