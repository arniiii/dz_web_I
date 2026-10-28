export const swap = (items) => {
  if (items.length > 1) {
    const first = items[0];
    items[0] = items[items.length - 1];
    items[items.length - 1] = first;
  }
  return items;
};
