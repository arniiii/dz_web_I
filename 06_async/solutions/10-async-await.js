import fs from "fs/promises";
export const exchange = async (first, second) => {
  const [left, right] = await Promise.all([
    fs.readFile(first),
    fs.readFile(second),
  ]);
  await Promise.all([fs.writeFile(first, right), fs.writeFile(second, left)]);
};
