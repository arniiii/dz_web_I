export default (object) => {
  const result = {};
  for (const [key, value] of Object.entries(object))
    Object.defineProperty(result, key, {
      value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  return result;
};
