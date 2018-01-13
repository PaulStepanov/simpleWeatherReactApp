import React from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import WeatherCard from "./WeatherCard";

import PropTypes from 'prop-types';

class WeatherCardBar extends React.Component {
  constructor(props) {
    super(props)

    this.calculateRowSize = this.calculateRowSize.bind(this)
  }

  calculateRowSize() {
    let cardsInRow = this.props.cardsInRow
    if (!cardsInRow) {
      cardsInRow = 5 //default value for cards in raw is 5
    }
    return Math.floor(12 / cardsInRow)
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            {this.props.weatherCardEntityArr.map(
              weatherCardEntity =>
                <Col md={this.calculateRowSize()}>
                  <WeatherCard day={weatherCardEntity.day.format('ddd')}
                               temperatureMin={weatherCardEntity.weather.minTemp}
                               temperatureMax={weatherCardEntity.weather.maxTemp}
                               weather={weatherCardEntity.weather.weatherType}/>
                </Col>
            )}
          </Row>
        </Grid>
      </div>
    )
  }
}

WeatherCardBar.propTypes = {
  cardsInRow: PropTypes.number,
  weatherCardEntityArr: PropTypes.array
};

export default WeatherCardBar
