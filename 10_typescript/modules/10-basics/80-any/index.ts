export default (query: string): Record<string, string> =>
  query.split("&").reduce<Record<string, string>>((result, pair) => {
    const separator = pair.indexOf("=");
    if (separator >= 0)
      result[pair.slice(0, separator)] = pair.slice(separator + 1);
    return result;
  }, {});
