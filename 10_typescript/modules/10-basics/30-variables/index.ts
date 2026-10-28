export default function repeat(text: string, count: number): string {
  let result = "";
  for (let i = 0; i < count; i += 1) result += text;
  return result;
}
