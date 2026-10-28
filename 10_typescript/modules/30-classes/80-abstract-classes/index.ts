export default abstract class Clock {
  constructor(
    protected hours: number,
    protected minutes: number,
    protected seconds: number
  ) {}
  abstract render(): string;
  tick(): void {
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) this.hours = 0;
  }
}
