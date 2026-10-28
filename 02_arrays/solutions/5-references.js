export const reverse = (items) => {
  for (let i = 0; i < Math.floor(items.length / 2); i += 1) {
    const j = items.length - 1 - i;
    [items[i], items[j]] = [items[j], items[i]];
  }
};
