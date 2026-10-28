export default (document) => {
  for (const div of document.querySelectorAll("div")) {
    for (const node of [...div.childNodes]) {
      if (node.nodeType !== 3 || node.textContent.trim() === "") continue;
      const p = document.createElement("p");
      p.textContent = node.textContent;
      node.replaceWith(p);
    }
  }
};
