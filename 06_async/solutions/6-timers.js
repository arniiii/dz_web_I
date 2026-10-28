import fs from "fs";
export default (path, period, callback) => {
  let previous = Date.now();
  let pending = false;
  let stopped = false;
  const timer = setInterval(() => {
    if (pending || stopped) return;
    pending = true;
    fs.stat(path, (error, info) => {
      pending = false;
      if (stopped) return;
      if (error) {
        stopped = true;
        clearInterval(timer);
        callback(error);
        return;
      }
      if (info.mtimeMs > previous) {
        previous = info.mtimeMs;
        callback(null);
      }
    });
  }, period);
  return timer;
};
