const freeEmailDomains = ["gmail.com", "yandex.ru", "hotmail.com", "yahoo.com"];
export default (emails) =>
  emails.reduce((counts, email) => {
    const domain = email.split("@")[1];
    if (freeEmailDomains.includes(domain))
      counts[domain] = (counts[domain] ?? 0) + 1;
    return counts;
  }, {});
