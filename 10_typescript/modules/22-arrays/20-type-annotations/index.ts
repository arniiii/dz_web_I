export default (items: (string | number)[]): (string | number)[] => [
  ...new Set(items),
];
