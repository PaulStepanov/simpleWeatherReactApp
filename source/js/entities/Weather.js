export default class Weather {
  /**
   *
   * @param weatherType :string from WEATHER_STATE
   * @param minTemp :Temperature
   * @param maxTemp :Temperature
   * @param temperature :Temperature
   * @param humidity :number; humidity in percents
   * @param pressure :number
   * @param seaLevel :number
   * @param groundLevel :number
   * @param wind :Wind
   * @param rain :Rain
   * @param clouds :number; cloudiness in percents
   */
  constructor(weatherType, minTemp, maxTemp, temperature, humidity, pressure, seaLevel, groundLevel, wind, rain, clouds) {
    this._weatherType = weatherType;
    this._minTemp = minTemp;
    this._maxTemp = maxTemp;
    this._humidity = humidity;
    this._pressure = pressure;
    this._seaLevel = seaLevel;
    this._groundLevel = groundLevel;
    this._temperature = temperature;
    this._wind = wind;
    this._rain = rain;
    this._clouds = clouds;
  }


  get wind() {
    return this._wind;
  }

  set wind(value) {
    this._wind = value;
  }

  get rain() {
    return this._rain;
  }

  set rain(value) {
    this._rain = value;
  }

  get clouds() {
    return this._clouds;
  }

  set clouds(value) {
    this._clouds = value;
  }

  get temperature() {
    return this._temperature;
  }

  set temperature(value) {
    this._temperature = value;
  }

  get weatherType() {
    return this._weatherType;
  }

  get minTemp() {
    return this._minTemp;
  }

  get maxTemp() {
    return this._maxTemp;
  }

  get humidity() {
    return this._humidity;
  }

  get pressure() {
    return this._pressure;
  }

  get seaLevel() {
    return this._seaLevel;
  }

  get groundLevel() {
    return this._groundLevel;
  }

  set groundLevel(value) {
    this._groundLevel = value;
  }
}
