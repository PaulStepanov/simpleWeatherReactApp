import * as beaufort from "beaufort";
import wind from "../entities/Wind";

export function formatWind(wind) {
  const beaufortOptions = {unit: 'mps', getName: true};
  const windSpeedStr = beaufort(wind.speed, beaufortOptions);

  let directionStr

  switch (wind.direction) {
    case 0 :
      directionStr = 'North';
      break;
    case 90 :
      directionStr = 'East';
      break;
    case 180 :
      directionStr = 'South';
      break;
    case 270 :
      directionStr = 'West';
      break;
    case 360 :
      directionStr = 'North';
      break;
  }

  if (wind.direction > 0 && wind.direction < 90) {
    directionStr = 'North-East'
  }
  if (wind.direction > 90 && wind.direction < 180) {
    directionStr = 'South-East'
  }
  if (wind.direction > 180 && wind.direction < 270) {
    directionStr = 'South-West'
  }

  if (wind.direction > 270 && wind.direction < 360) {
    directionStr = 'North-West'
  }

  return `${windSpeedStr}, ${wind.speed}m/s, ${directionStr}(${wind.direction})`
}
