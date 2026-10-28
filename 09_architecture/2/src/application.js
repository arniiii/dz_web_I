import axios from "axios";
export default async () => {
  const state = { tasks: [], sending: false };
  const form = document.querySelector("form");
  const list = document.querySelector("#tasks");
  const button = form.querySelector('[type="submit"]');
  const render = () => {
    list.replaceChildren(
      ...state.tasks.map(({ name }) => {
        const item = document.createElement("li");
        item.className = "list-group-item";
        item.textContent = name;
        return item;
      })
    );
    button.disabled = state.sending;
  };
  const showError = (message) => {
    let error = document.querySelector('[role="alert"]');
    if (!error) {
      error = document.createElement("p");
      error.setAttribute("role", "alert");
      form.after(error);
    }
    error.textContent = message;
  };
  const response = await axios.get("/api/tasks");
  state.tasks = response.data.items;
  render();
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (state.sending) return;
    const task = { name: form.elements.name.value };
    state.sending = true;
    render();
    try {
      await axios.post("/api/tasks", task);
      state.tasks.unshift(task);
      form.reset();
      form.elements.name.focus();
      showError("");
    } catch {
      showError("Unable to save task. Try again.");
    } finally {
      state.sending = false;
      render();
    }
  });
};
