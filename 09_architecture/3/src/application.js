export default (laptops) => {
  const form = document.querySelector("form");
  const result = document.querySelector(".result");
  const state = {};
  const render = () => {
    const values = laptops.filter((laptop) =>
      Object.entries(state).every(([key, value]) => {
        if (value === "") return true;
        const [property, operator] = key.split("_");
        if (operator === "eq") return String(laptop[property]) === value;
        return operator === "gte"
          ? laptop[property] >= Number(value)
          : laptop[property] <= Number(value);
      })
    );
    result.replaceChildren();
    if (values.length === 0) return;
    const ul = document.createElement("ul");
    for (const { model } of values) {
      const li = document.createElement("li");
      li.textContent = model;
      ul.append(li);
    }
    result.append(ul);
  };
  for (const field of form.querySelectorAll("input,select")) {
    state[field.name] = field.value;
    field.addEventListener(
      field.tagName === "SELECT" ? "change" : "input",
      () => {
        state[field.name] = field.value;
        render();
      }
    );
  }
  render();
};
