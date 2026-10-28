export default (items, property) =>
  items.reduce((groups, item) => {
    const key = item[property];
    if (!Object.hasOwn(groups, key))
      Object.defineProperty(groups, key, {
        value: [],
        writable: true,
        enumerable: true,
        configurable: true,
      });
    groups[key].push(item);
    return groups;
  }, {});
