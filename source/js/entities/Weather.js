export default class Weather {
  constructor(weatherType,minTemp,maxTemp,humidity,pressure, seaLevel, GroundLevel) {
    this._weatherType = weatherType;
    this._minTemp = minTemp;
    this._maxTemp = maxTemp;
    this._humidity = humidity;
    this._pressure = pressure;
    this._seaLevel = seaLevel;
    this._GroundLevel = GroundLevel;
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

  get GroundLevel() {
    return this._GroundLevel;
  }
}
