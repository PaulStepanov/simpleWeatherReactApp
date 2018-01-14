export default function (fetchedWeatherArr) {
  fetchedWeatherArr = fetchedWeatherArr.sort((e1, e2) => {
    if (e1.dayIndex > e2.dayIndex) return 1;
    if (e1.dayIndex < e2.dayIndex) return -1;
    if (e1.dayIndex === e2.dayIndex) return 0
  });

  return fetchedWeatherArr.map(e => {
    return e.weather
  })
}
