export default class WeatherCardEntity {
  /**
   *
   * @param day - momentjs object
   * @param weather - Weather entity
   */
  constructor(day, weather){
    this._day = day;
    this._weather = weather;
  }


  get day() {
    return this._day;
  }

  set day(value) {
    this._day = value;
  }

  get weather() {
    return this._weather;
  }

  set weather(value) {
    this._weather = value;
  }
}
