export default class Gigasecond {
  constructor(newDate) {
    this.newDate = newDate;
    this.gigasecond = Math.pow(10, 9);
    this.gsMilli = this.gigasecond * 1000;
    this.dateInMs = this.newDate.getTime();
    this.expectedDate = this.gsMilli + this.dateInMs;
  }
  date() {
    return new Date(this.expectedDate);
  }
}