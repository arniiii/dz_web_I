type CustomFileOptions = { name: string; size: number };
class CustomFile {
  constructor(private name: string, private size: number) {}
  protected toString(): string {
    return `${this.name} (${this.size} bytes)`;
  }
}
export default class ImageCustomFile extends CustomFile {
  private width: number;
  private height: number;
  constructor(options: CustomFileOptions & { width: number; height: number }) {
    super(options.name, options.size);
    this.width = options.width;
    this.height = options.height;
  }
  public toString(): string {
    return `${super.toString()} ${this.width}x${this.height}`;
  }
}
