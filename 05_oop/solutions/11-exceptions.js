export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}
export const parseJson = (text) => {
  try {
    return JSON.parse(text);
  } catch {
    throw new ParseError("Invalid JSON string");
  }
};
