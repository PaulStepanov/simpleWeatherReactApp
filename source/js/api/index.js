import WEATHER_STATE from "../constants/weatherState";
import Weather from "../entities/Weather";
import Temperature from "../entities/Temerature";
import Rain from "../entities/Rain";
import Wind from "../entities/Wind";
import moment from "moment";

/**
 * @desc simulating working with api
 * @return {Promise}
 */
function getMockWeatherForecast() {
  return new Promise((resolve, reject) => {
    let retAarr = []
    retAarr.push(
      {
        day: moment(),
        dayIndex: 1,
        weather: new Weather(WEATHER_STATE.thunderstorm, new Temperature(-5), new Temperature(0), new Temperature(3), 50, 1000, 970, 900, new Wind(3.61, 165.001), new Rain(12, 0.185), 80)
      }
    )
    retAarr.push(
      {
        day: moment().add(1, 'day'),
        dayIndex: 2,
        weather: new Weather(WEATHER_STATE.scatteredClouds, new Temperature(-10), new Temperature(-5), new Temperature(-7), 50, 1000, 970, 900, new Wind(3.61, 165.001), new Rain(12, 0.185), 80)
      }
    )
    retAarr.push(
      {
        day: moment().add(2, 'day'),
        dayIndex: 3,
        weather: new Weather(WEATHER_STATE.snow, new Temperature(-15), new Temperature(-13), new Temperature(-14), 50, 1000, 970, 900, new Wind(3.61, 165.001), new Rain(12, 0.185), 80)
      }
    )
    retAarr.push(
      {
        day: moment().add(3, 'day'),
        dayIndex: 4,
        weather: new Weather(WEATHER_STATE.fewClouds, new Temperature(-6), new Temperature(3), new Temperature(0), 50, 1000, 970, 900, new Wind(3.61, 165.001), new Rain(12, 0.185), 80)
      }
    )
    retAarr.push(
      {
        day: moment().add(4, 'day'),
        dayIndex: 5,
        weather: new Weather(WEATHER_STATE.mist, new Temperature(0), new Temperature(3), new Temperature(1), 50, 1000, 970, 900, new Wind(3.61, 165.001), new Rain(12, 0.185), 80)
      }
    )

    setTimeout(() => {
      resolve(retAarr)
    }, 700)
  })
}

export default {
  getMockWeatherForecast,
};
