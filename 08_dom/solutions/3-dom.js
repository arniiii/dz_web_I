const lines = document.body.innerHTML
  .trim()
  .split("\n")
  .map((line) => line.trim());
document.body.innerHTML = lines.map((line) => `<p>${line}</p>`).join("");
