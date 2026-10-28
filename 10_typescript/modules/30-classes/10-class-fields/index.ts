export default class CustomFile {
  public name: string;
  public size: number;
  constructor(options: { name: string; size: number }) {
    this.name = options.name;
    this.size = options.size;
  }
  toString(): string {
    return `${this.name} (${this.size} bytes)`;
  }
}
