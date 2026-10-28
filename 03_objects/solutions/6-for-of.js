export default (object, keys) => {
  const result = {};
  for (const [key, value] of Object.entries(object))
    if (keys.includes(key))
      Object.defineProperty(result, key, {
        value,
        enumerable: true,
        writable: true,
        configurable: true,
      });
  return result;
};
