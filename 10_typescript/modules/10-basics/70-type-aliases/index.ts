export type User = { name: string; age: number };
export default (a: User, b: User): User | null =>
  a.age === b.age ? null : a.age > b.age ? a : b;
