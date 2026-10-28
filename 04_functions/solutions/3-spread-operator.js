export default (...dates) =>
  dates.map((date) => new Date(...date).toDateString());
