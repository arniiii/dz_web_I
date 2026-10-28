export default (items) => {
  if (items.length === 0) return [];
  return items.filter(
    (value) => Math.abs(value % 2) === Math.abs(items[0] % 2)
  );
};
