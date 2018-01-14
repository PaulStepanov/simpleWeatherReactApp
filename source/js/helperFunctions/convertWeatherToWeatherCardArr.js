import WeatherCardEntity from "../entities/WeatherCardEntity";
import moment from "moment";

export default function (weatherArr) {
  return weatherArr.map((e, i) => {
    return new WeatherCardEntity(moment().add(i, 'days').format('dd'), e, i + 1)
  })
}
