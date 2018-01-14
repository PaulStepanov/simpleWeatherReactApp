import React from 'react';
import PropTypes from 'prop-types';
import WeatherSVGICO from "../WeatherSVGICO";

const weatherICOStyle = {height: '50%', width: '50%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}

class WeatherCard extends React.Component {
  render() {
    const props = this.props

    return (
      <div className='card WeatherCard'>
        <div className="card-body">
          <h5 className="card-title" style={{textAlign: "center"}}>{this.props.day}</h5>
          <WeatherSVGICO weather={this.props.weather} timeOfDay={this.props.timeOfDay} style={weatherICOStyle}/>
          <p className="card-text"
             style={{textAlign: "center"}}>{this.props.temperatureMin.toString()}/ {props.temperatureMax.toString()}</p>
        </div>
      </div>
    );
  }
}

WeatherCard.propTypes = {
  day: PropTypes.string,
  temperatureMax: PropTypes.object,
  temperatureMin: PropTypes.object,
  weather: PropTypes.string,
  timeOfDay: PropTypes.string
};

export default WeatherCard;

