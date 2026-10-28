function newYearCongratulate(name: string): string;
function newYearCongratulate(year: number, name: string): string;
function newYearCongratulate(value: number | string, name?: string): string {
  return typeof value === "number"
    ? `Hi ${name}! Happy New Year ${value}!`
    : `Hi ${value}! Happy New Year!`;
}
export default newYearCongratulate;
