export default (companies) => {
  const state = { selected: null };
  const container = document.querySelector(".container");
  const render = () => {
    container.replaceChildren();
    for (const company of companies) {
      const button = document.createElement("button");
      button.className = "btn btn-primary";
      button.textContent = company.name;
      button.addEventListener("click", () => {
        state.selected = state.selected === company.id ? null : company.id;
        render();
      });
      container.append(button);
    }
    const company = companies.find(({ id }) => id === state.selected);
    if (company) {
      const description = document.createElement("div");
      description.textContent = company.description;
      container.append(description);
    }
  };
  render();
};
