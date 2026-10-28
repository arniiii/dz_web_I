function last(value: string): string;
function last(value: number): number;
function last(value: string | number): string | number {
  const character = String(value).slice(-1);
  return typeof value === "number" ? Number(character) : character;
}
export default last;
