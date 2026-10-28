export default () => {
  let count = 0;
  const container = document.querySelector(".alerts");
  document.querySelector("#alert-generator").addEventListener("click", () => {
    count += 1;
    const alert = document.createElement("div");
    alert.className = "alert alert-primary";
    alert.textContent = `Alert ${count}`;
    container.prepend(alert);
  });
};
