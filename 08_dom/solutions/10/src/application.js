import escapeHtml from "escape-html";
export default () => {
  const form = document.querySelector(".feedback-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const content = document.createElement("div");
    content.innerHTML = `<p>Feedback has been sent</p><div>Email: ${escapeHtml(
      data.get("email")
    )}</div><div>Name: ${escapeHtml(
      data.get("name")
    )}</div><div>Comment: ${escapeHtml(data.get("comment"))}</div>`;
    form.replaceWith(content);
  });
};
