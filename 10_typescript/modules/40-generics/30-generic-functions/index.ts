type MyArray<T> = {
  items: T[];
  push(value: T): number;
  filter(
    callback: (value: T, index: number, array: T[]) => boolean
  ): MyArray<T>;
};
export default MyArray;
