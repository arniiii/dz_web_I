export default class CustomFile {
  public name: string;
  public size: number;
  private isCopy: boolean;
  constructor(options: { name: string; size: number } | CustomFile) {
    this.name = options.name;
    this.size = options.size;
    this.isCopy = options instanceof CustomFile;
  }
  toString(): string {
    return `${this.isCopy ? "(copy) " : ""}${this.name} (${this.size} bytes)`;
  }
}
