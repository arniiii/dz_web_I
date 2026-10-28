export default () => {
  let nextId = 1;
  const state = {
    lists: [{ id: 0, name: "General" }],
    tasks: [],
    activeListId: 0,
  };
  const lists = document.querySelector('[data-container="lists"]');
  const tasks = document.querySelector('[data-container="tasks"]');
  const listForm = document.querySelector('[data-container="new-list-form"]');
  const taskForm = document.querySelector('[data-container="new-task-form"]');
  const render = () => {
    const ul = document.createElement("ul");
    for (const list of state.lists) {
      const li = document.createElement("li");
      const label = document.createElement(
        list.id === state.activeListId ? "b" : "a"
      );
      label.textContent = list.name;
      if (label.tagName === "A") {
        label.href = `#${list.name.toLowerCase()}`;
        label.addEventListener("click", (event) => {
          event.preventDefault();
          state.activeListId = list.id;
          render();
        });
      }
      li.append(label);
      ul.append(li);
    }
    lists.replaceChildren(ul);
    tasks.replaceChildren();
    const currentTasks = state.tasks.filter(
      ({ listId }) => listId === state.activeListId
    );
    if (currentTasks.length) {
      const taskList = document.createElement("ul");
      for (const { name } of currentTasks) {
        const li = document.createElement("li");
        li.textContent = name;
        taskList.append(li);
      }
      tasks.append(taskList);
    }
  };
  listForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = listForm.elements.name.value;
    if (!state.lists.some((list) => list.name === name))
      state.lists.push({ id: nextId++, name });
    listForm.reset();
    render();
  });
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.tasks.push({
      id: nextId++,
      name: taskForm.elements.name.value,
      listId: state.activeListId,
    });
    taskForm.reset();
    render();
  });
  render();
};
