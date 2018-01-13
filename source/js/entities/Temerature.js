import TemperatureUnit, {getTemperatureSymbol} from "./TemperatureUnit";

export default class Temperature {
  constructor(temperature, unit = TemperatureUnit.CELSIUS) {
    this._temperature = temperature;
    this._unit = unit;
  }

  get temperature() {
    return this._temperature;
  }

  set temperature(value) {
    this._temperature = value;
  }

  get unit() {
    return this._unit;
  }

  set unit(value) {
    this._unit = value;
  }

  toString() {
    return (this._temperature > 0 ? '+' : '') + this._temperature + getTemperatureSymbol(this._unit)
  }
}
