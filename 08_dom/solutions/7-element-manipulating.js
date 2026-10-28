export default (document) => {
  for (const element of document.querySelectorAll("[class]")) {
    for (const name of [...element.classList]) {
      const [first, ...rest] = name.split("-");
      const normalized =
        first +
        rest
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join("");
      if (normalized) element.classList.replace(name, normalized);
    }
  }
};
