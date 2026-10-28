export default (name, extras = {}) => ({
  name,
  state: "moderating",
  createdAt: Date.now(),
  ...extras,
});
