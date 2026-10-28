const normalize = (word: string): string => [...word].sort().join("");
export default (word: string, candidates: string[]): string[] =>
  candidates.filter((candidate) => normalize(word) === normalize(candidate));
