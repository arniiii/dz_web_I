type Entry = { [key: string]: number };
interface IPhonebook {
  get(key: string): number | null;
  set(key: string, value: number): void;
}
export default class Phonebook implements IPhonebook {
  readonly entries: Entry = {};
  get(key: string): number | null {
    return Object.hasOwn(this.entries, key) ? this.entries[key] : null;
  }
  set(key: string, value: number): void {
    Object.defineProperty(this.entries, key, {
      value,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }
}
