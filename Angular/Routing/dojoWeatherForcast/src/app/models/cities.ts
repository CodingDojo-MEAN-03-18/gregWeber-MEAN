export class City {
  constructor(
    public name = '',
    public humidity = 0,
    public tempHigh = 0,
    public tempLow = 0,
    public status = 0,
  ) { }

  avgTemp() {
    return (this.tempHigh + this.tempLow) / 2;
  }
}

