export default (object, keys) => {
  let current = object;
  for (const key of keys) {
    if (
      current === null ||
      typeof current !== "object" ||
      !Object.hasOwn(current, key)
    )
      return null;
    current = current[key];
  }
  return current;
};
