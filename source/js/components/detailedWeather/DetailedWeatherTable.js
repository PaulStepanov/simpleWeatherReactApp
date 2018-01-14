import * as React from "react";
import {Table} from "react-bootstrap";
import {formatWind} from "../../helperFunctions/formatWind";
import PropTypes from 'prop-types';

class DetailedWeatherTable extends React.Component {
  render() {
    let weather = this.props.weather
    return (
      <Table striped bordered condensed hover>
        <tbody>
        <tr>
          <td>Wind</td>
          <td>{formatWind(weather.wind)}</td>
        </tr>
        <tr>
          <td>Pressure</td>
          <td>{weather.pressure} hpa</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{weather.humidity} %</td>
        </tr>
        <tr>
          <td>Rain</td>
          <td>{weather.rain.volume}</td>
        </tr>
        <tr>
          <td>Sea level</td>
          <td>{weather.seaLevel} hPa</td>
        </tr>
        <tr>
          <td>Ground level</td>
          <td>{weather.groundLevel} hPa</td>
        </tr>
        </tbody>
      </Table>
    )
  }
}

DetailedWeatherTable.propTypes = {
  weather: PropTypes.object
}

export default DetailedWeatherTable
