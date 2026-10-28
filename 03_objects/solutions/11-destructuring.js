export default (users) => {
  const names = [];
  for (const { name } of users) names.push(name);
  return names.sort();
};
