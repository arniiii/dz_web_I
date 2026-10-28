export default (site) => {
  const [scheme, name] = site.includes("://")
    ? site.split("://")
    : ["http", site];
  return { scheme, name };
};
