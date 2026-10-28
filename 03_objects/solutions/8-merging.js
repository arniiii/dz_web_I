export default (object, keys, data) => {
  const selected = keys.length === 0 ? Object.keys(data) : keys;
  for (const key of selected)
    if (Object.hasOwn(data, key))
      Object.defineProperty(object, key, {
        value: data[key],
        writable: true,
        enumerable: true,
        configurable: true,
      });
  return object;
};
