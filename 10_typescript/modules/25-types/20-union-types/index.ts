export default (str: string, char: string): number | null => {
  const index = str.lastIndexOf(char);
  return index < 0 ? null : index;
};
