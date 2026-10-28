export default (items) => {
  for (let end = items.length - 1; end > 0; end -= 1) {
    let changed = false;
    for (let i = 0; i < end; i += 1) {
      if (items[i] > items[i + 1]) {
        [items[i], items[i + 1]] = [items[i + 1], items[i]];
        changed = true;
      }
    }
    if (!changed) break;
  }
  return items;
};
