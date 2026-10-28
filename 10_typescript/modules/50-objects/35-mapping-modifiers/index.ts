type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};
export default function deepFreeze<T extends object>(
  object: T
): DeepReadonly<T> {
  const freeze = (value: object, seen: WeakSet<object>): void => {
    if (seen.has(value)) return;
    seen.add(value);
    for (const child of Object.values(value))
      if (child !== null && typeof child === "object") freeze(child, seen);
    Object.freeze(value);
  };
  freeze(object, new WeakSet());
  return object as DeepReadonly<T>;
}
