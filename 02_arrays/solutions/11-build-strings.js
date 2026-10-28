export default (definitions) => {
  if (definitions.length === 0) return "";
  let result = "<dl>";
  for (const [term, description] of definitions)
    result += `<dt>${term}</dt><dd>${description}</dd>`;
  return `${result}</dl>`;
};
