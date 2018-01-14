import * as React from "react";
import PropTypes from 'prop-types';
import moment from "moment";

const dateTimeFormat = 'HH:mm MMM M';

/**
 * @desc this element available only if target(for which we look details) day is today
 */
class DateTimeElement extends React.Component {
  render() {
    if (this.props.day === undefined || parseInt(this.props.day) === 1) {
      return <p>{moment().format(dateTimeFormat)}</p>
    } else {
      return null
    }
  }

}

DateTimeElement.propTypes = {
  /**
   * @prop day:number - day offset from today(1 - today, 2 - tomorrow)
   */
  day: PropTypes.any
}

export default DateTimeElement
