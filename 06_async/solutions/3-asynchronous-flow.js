import fs from "fs";
export const compareFileSizes = (first, second, callback) => {
  fs.stat(first, (error, left) => {
    if (error) {
      callback(error);
      return;
    }
    fs.stat(second, (secondError, right) => {
      if (secondError) {
        callback(secondError);
        return;
      }
      callback(null, Math.sign(left.size - right.size));
    });
  });
};
