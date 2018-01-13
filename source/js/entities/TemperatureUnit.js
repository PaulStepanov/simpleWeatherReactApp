const TemperatureUnit = {
  CELSIUS: 'CELSIUS',
  FAHRENHEIT: 'FAHRENHEIT'
}

const TemperatureUnittoSymbolMap = {
  CELSIUS: '°',
  FAHRENHEIT: 'F'
}

export function getTemperatureSymbol(unit) {
  return TemperatureUnittoSymbolMap[unit];
}

export default TemperatureUnit;
