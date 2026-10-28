export default <T>(items: T[]): T | null =>
  items.length ? items[items.length - 1] : null;
