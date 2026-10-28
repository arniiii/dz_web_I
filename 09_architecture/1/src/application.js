export default () => {
  const state = { sum: 0 };
  const form = document.querySelector("form");
  const input = form.elements.number;
  const render = () => {
    document.querySelector("#result").textContent = state.sum;
    form.reset();
    input.focus();
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    state.sum += Number.parseInt(input.value, 10);
    render();
  });
  form.querySelector("button").addEventListener("click", () => {
    state.sum = 0;
    render();
  });
  render();
};
