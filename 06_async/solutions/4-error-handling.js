import fs from "fs";
export const move = (source, destination, callback) => {
  fs.readFile(source, (error, data) => {
    if (error) {
      callback(error);
      return;
    }
    fs.writeFile(destination, data, (writeError) => {
      if (writeError) {
        callback(writeError);
        return;
      }
      fs.unlink(source, callback);
    });
  });
};
