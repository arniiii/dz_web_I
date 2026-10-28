import fs from "fs/promises";
export const touch = (path) => fs.open(path, "a").then((file) => file.close());
