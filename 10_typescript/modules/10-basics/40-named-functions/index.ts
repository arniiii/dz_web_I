export default function getHiddenCard(
  number: string,
  count: number = 4
): string {
  return "*".repeat(count) + number.slice(-4);
}
