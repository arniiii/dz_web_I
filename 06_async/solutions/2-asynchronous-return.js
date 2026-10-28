import fs from "fs";
export default (path, data, callback) => fs.writeFile(path, data, callback);
