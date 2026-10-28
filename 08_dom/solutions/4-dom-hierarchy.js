export default (root) => {
  const paragraphs = [];
  const walk = (node) => {
    if (node.tagName === "P") paragraphs.push(node.textContent.trim());
    else for (const child of node.children) walk(child);
  };
  walk(root);
  return paragraphs;
};
