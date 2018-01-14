import * as beaufort from "beaufort";
import wind from "../entities/Wind";

export function formatWind(wind) {
  const beaufortOptions = {unit: 'mps', getName: true};
  const windSpeedStr = beaufort(wind._speed, beaufortOptions);

  let directionStr

  switch (wind._direction) {
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

  if (wind._direction > 0 && wind._direction < 90) {
    directionStr = 'North-East'
  }
  if (wind._direction > 90 && wind._direction < 180) {
    directionStr = 'South-East'
  }
  if (wind._direction > 180 && wind._direction < 270) {
    directionStr = 'South-West'
  }

  if (wind._direction > 270 && wind._direction < 360) {
    directionStr = 'North-West'
  }

  return `${windSpeedStr}, ${wind._speed}m/s, ${directionStr}(${wind._direction})`
}
