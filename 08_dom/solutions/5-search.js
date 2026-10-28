export default (document) => ({
  title: document.querySelector(".content h1").textContent.trim(),
  description: document
    .querySelector(".content .description")
    .textContent.trim(),
  items: [...document.querySelectorAll(".content .links > div")].map(
    (item) => ({
      title: item.querySelector("h2 a").textContent.trim(),
      description: item.querySelector("p").textContent.trim(),
    })
  ),
});
