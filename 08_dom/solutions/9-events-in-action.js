export default () => {
  for (const tab of document.querySelectorAll(
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"]'
  )) {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      const nav = tab.closest(".nav");
      for (const item of nav.querySelectorAll(
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"]'
      )) {
        const selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
        const panel = document.querySelector(item.dataset.bsTarget);
        if (panel) panel.classList.toggle("active", selected);
      }
    });
  }
};
