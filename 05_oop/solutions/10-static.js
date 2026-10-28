export default class Time {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }
  static fromString(text) {
    const [hours, minutes] = text.split(":").map(Number);
    return new Time(hours, minutes);
  }
  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
