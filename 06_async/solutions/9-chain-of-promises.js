import fs from "fs/promises";
export const getTypes = (paths) =>
  Promise.all(
    paths.map((path) =>
      fs
        .stat(path)
        .then((info) => (info.isDirectory() ? "directory" : "file"))
        .catch(() => null)
    )
  );
