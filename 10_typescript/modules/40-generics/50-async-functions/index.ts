export default async function asyncMap<T, U>(
  items: Promise<T>[],
  callback: (item: T, index: number) => U
): Promise<Awaited<U>[]> {
  return Promise.all(
    items.map(async (item, index) => callback(await item, index))
  );
}
