export default function make(numer = 0, denom = 1) {
  return {
    numer,
    denom,
    setNumer(value) {
      this.numer = value;
    },
    setDenom(value) {
      this.denom = value;
    },
    getNumer() {
      return this.numer;
    },
    getDenom() {
      return this.denom;
    },
    toString() {
      return `${this.numer}/${this.denom}`;
    },
    add(other) {
      return make(
        this.numer * other.getDenom() + other.getNumer() * this.denom,
        this.denom * other.getDenom()
      );
    },
  };
}
