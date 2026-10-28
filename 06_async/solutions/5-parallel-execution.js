import fs from "fs";
import path from "path";
import async from "async";
export const getDirectorySize = (directory, callback) => {
  fs.readdir(directory, (error, names) => {
    if (error) {
      callback(error);
      return;
    }
    async.map(
      names,
      (name, next) => {
        fs.stat(path.join(directory, name), (statError, info) => {
          if (statError) {
            next(statError);
            return;
          }
          next(null, info.isFile() ? info.size : 0);
        });
      },
      (mapError, sizes) => {
        if (mapError) {
          callback(mapError);
          return;
        }
        callback(
          null,
          sizes.reduce((sum, size) => sum + size, 0)
        );
      }
    );
  });
};
