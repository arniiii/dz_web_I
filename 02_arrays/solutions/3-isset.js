export const get = (items, index, fallback = null) =>
  index >= 0 && index < items.length ? items[index] : fallback;
