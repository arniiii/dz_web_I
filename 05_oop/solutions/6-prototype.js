export default function Money(value, currency = "usd") {
  this.value = value;
  this.currency = currency;
}
Money.prototype.getValue = function () {
  return this.value;
};
Money.prototype.getCurrency = function () {
  return this.currency;
};
Money.prototype.exchangeTo = function (currency) {
  const rate =
    this.currency === currency ? 1 : this.currency === "usd" ? 0.7 : 1.2;
  return new Money(this.value * rate, currency);
};
Money.prototype.add = function (other) {
  return new Money(
    this.value + other.exchangeTo(this.currency).getValue(),
    this.currency
  );
};
Money.prototype.format = function () {
  return this.value.toLocaleString("en-US", {
    style: "currency",
    currency: this.currency,
  });
};
