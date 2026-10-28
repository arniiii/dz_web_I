import fs from "fs";
export default (
  path,
  callback = (error) => {
    if (error) console.error(error.message);
  }
) => {
  fs.readFile(path, "utf8", (error, data) => {
    if (error) {
      callback(error);
      return;
    }
    console.log(data);
    callback(null);
  });
};
