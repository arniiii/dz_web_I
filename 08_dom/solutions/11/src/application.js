import "whatwg-fetch";
export default () => {
  for (const input of document.querySelectorAll("input[data-autocomplete]")) {
    const name = input.dataset.autocompleteName;
    const list = [
      ...document.querySelectorAll("ul[data-autocomplete-name]"),
    ].find((item) => item.dataset.autocompleteName === name);
    let revision = 0;
    input.addEventListener("input", async (event) => {
      const current = ++revision;
      const url = new URL(input.dataset.autocomplete, window.location.origin);
      url.searchParams.set("search", event.target.value);
      try {
        const response = await fetch(url.toString());
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const values = await response.json();
        if (current !== revision) return;
        const items = (values.length ? values : ["Nothing"]).map((value) => {
          const item = document.createElement("li");
          item.textContent = value;
          return item;
        });
        list.replaceChildren(...items);
      } catch (error) {
        if (current !== revision) return;
        const item = document.createElement("li");
        item.textContent = "Unable to load data";
        list.replaceChildren(item);
      }
    });
  }
};
