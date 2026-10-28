export default (url) => {
  window.location.assign(url);
  return `${navigator.appCodeName}/${
    navigator.appVersion.split(" ")[0]
  } ${url}`;
};
