type User = { id: number; name: string; age: number };
export type UserResponse = { users: User[]; friends: [number, number][] };
export default (json: string, id: number): User[] => {
  const data = JSON.parse(json) as UserResponse;
  if (!data.users.some((user) => user.id === id)) return [];
  const ids = new Set(
    data.friends
      .filter((pair) => pair.includes(id))
      .map(([a, b]) => (a === id ? b : a))
  );
  return data.users.filter((user) => ids.has(user.id));
};
