export const getMutualFriends = (first, second) => {
  const ids = new Set(second.getFriends().map(({ id }) => id));
  return first.getFriends().filter(({ id }) => ids.has(id));
};
export default ({ id = null, friends = [] } = {}) => ({
  id,
  friends,
  getFriends() {
    return this.friends.slice();
  },
});
