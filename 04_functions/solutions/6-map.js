export default (users) => users.map(({ children }) => children).flat();
