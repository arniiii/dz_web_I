export default (value: unknown): boolean =>
  value !== null && typeof value === "object" && !Array.isArray(value);
