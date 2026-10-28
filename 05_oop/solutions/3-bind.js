export default (object, fn) =>
  (...args) =>
    fn.apply(object, args);
