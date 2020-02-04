export class Control {
  public time = 105;

  constructor(time?: number) {
    this.time = Number(time) || time;
  }
}
