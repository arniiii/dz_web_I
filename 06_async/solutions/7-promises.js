import fs from "fs/promises";
export const reverse = (path) =>
  fs
    .readFile(path, "utf8")
    .then((data) => fs.writeFile(path, data.split("\n").reverse().join("\n")));
