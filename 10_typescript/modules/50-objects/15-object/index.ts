export default function extract<T extends object, K extends PropertyKey>(
  object: T,
  keys: K[]
): Pick<T, Extract<K, keyof T>> {
  const result = {} as Pick<T, Extract<K, keyof T>>;
  for (const key of keys)
    if (Object.hasOwn(object, key))
      Object.defineProperty(
        result,
        key,
        Object.getOwnPropertyDescriptor(object, key)!
      );
  return result;
}
