export default (url) => (url.startsWith("https://") ? url : `https://${url}`);
