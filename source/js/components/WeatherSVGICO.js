import * as React from "react";
import WiDaySunny from 'svg/weather/wi-day-sunny.svg'
import WiDayFog from 'svg/weather/wi-day-fog.svg'
import WiDayCloudy from 'svg/weather/wi-day-cloudy.svg'
import WiDayRain from 'svg/weather/wi-day-rain.svg'
import WiDayThunderstorm from 'svg/weather/wi-day-thunderstorm.svg'
import WiDaySnow from 'svg/weather/wi-day-snow.svg'
import WiSmog from 'svg/weather/wi-smog.svg'
import PropTypes from 'prop-types';
import WEATHER_STATE from "../constants/weatherState";

const weatherToSvgIcon = {
  [WEATHER_STATE.clearSky]: {day: WiDaySunny, night: WiDaySunny},
  [WEATHER_STATE.fewClouds]: {day: WiDayFog, night: WiDayFog},
  [WEATHER_STATE.scatteredClouds]: {day: WiDayCloudy, night: WiDayCloudy},
  [WEATHER_STATE.brokenClouds]: {day: WiDayCloudy, night: WiDayCloudy},
  [WEATHER_STATE.showerRain]: {day: WiDayRain, night: WiDayRain},
  [WEATHER_STATE.rain]: {day: WiDayRain, night: WiDayRain},
  [WEATHER_STATE.thunderstorm]: {day: WiDayThunderstorm, night: WiDayThunderstorm},
  [WEATHER_STATE.snow]: {day: WiDaySnow, night: WiDaySnow},
  [WEATHER_STATE.mist]: {day: WiSmog, night: WiSmog}
}


class WeatherSVGICO extends React.Component {
    render() {
      //Default timeOfDay prop is day
      const timeOfDay = this.props.timeOfDay ? this.props.timeOfDay : "day"

      let SvgElement ;

      if (timeOfDay) {
        SvgElement = weatherToSvgIcon[this.props.weather].day;
      }
      if (timeOfDay) {
        SvgElement = weatherToSvgIcon[this.props.weather].night;
      }

      return (
        <div>
          <SvgElement style={{height:'50%', width:'50%',display:'block', marginLeft:'auto', marginRight:'auto'}}/>
        </div>
      )
    }


}

WeatherSVGICO.propTypes = {
  weather: PropTypes.string,
  timeOfDay: PropTypes.string
};

export default WeatherSVGICO
