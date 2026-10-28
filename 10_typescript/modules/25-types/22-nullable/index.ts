export default (price?: number | null): string => `$${(price ?? 0).toFixed(2)}`;
