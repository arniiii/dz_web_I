export default (initialNumber) => {
  let number = initialNumber;
  while (number >= 1) {
    console.log(number);
    number -= 1;
  }
};
