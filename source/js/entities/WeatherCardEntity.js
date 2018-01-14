export default class WeatherCardEntity {
  /**
   *
   * @param dayOfWeekStr :string - dayOfWeek(Sat, Sun, Mon)
   * @param weather: Weather
   * @param dayIndex:number - index of day to form link to details of day
   */
  constructor(dayOfWeekStr, weather, dayIndex){
    this._day = dayOfWeekStr;
    this._weather = weather;
    this._dayIndex = dayIndex;
  }


  get dayIndex() {
    return this._dayIndex;
  }

  set dayIndex(value) {
    this._dayIndex = value;
  }

  get dayOfWeekStr() {
    return this._day;
  }

  set dayOfWeekStr(value) {
    this._day = value;
  }

  get weather() {
    return this._weather;
  }

  set weather(value) {
    this._weather = value;
  }
}
