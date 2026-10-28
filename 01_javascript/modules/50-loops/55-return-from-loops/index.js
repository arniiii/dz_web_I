export default (email) => {
  for (const char of email) if (char === "@") return true;
  return false;
};
