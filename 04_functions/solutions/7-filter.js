export default (users) =>
  users
    .map(({ friends }) => friends)
    .flat()
    .filter(({ gender }) => gender === "female");
