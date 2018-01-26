/**
 *
 * WeatherPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeWeatherSelected } from 'containers/CitySelect/selectors';
import './weather.css';
export class WeatherPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const weather = this.props.weatherData;
    return (
      <div className="weather">

        <h1 className="title">{weather.name}</h1>
        <div className="line">
          <span className="line-title">Status:</span>
          <span className="line.value">{weather.weather[0].description}</span>
        </div>
        <div className="line">
          <span className="line-title">Temperature:</span>
          <span className="line.value">{weather.main.temp} Kelvin</span>
        </div>
      </div>
    );
  }
}

WeatherPage.propTypes = {
  weatherData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  weatherData: makeWeatherSelected(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(WeatherPage);
