export default (objects, callback) => {
  for (const object of objects) callback.call(object);
};
