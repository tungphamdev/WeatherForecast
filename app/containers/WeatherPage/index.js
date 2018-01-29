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

import cloud from '../../icons/cloudy5.png';
import mist from '../../icons/mist.png';
import dunno from '../../icons/dunno.png';
import clear from '../../icons/cloudy1.png';
import shower from '../../icons/shower3.png';

export class WeatherPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  setIconWeather = (main) => {
    switch (main) {
      case 'Clouds':
        return cloud;
      case 'Mist':
        return mist;
      case 'Clear':
        return clear;
      case 'Drizzle':
        return shower;
      default:
        return dunno;
    }
  }

  render() {
    const weather = this.props.weatherData;
    if (!weather.name) return null;

    const weatherTemp = Math.round(weather.main.temp - 273.15);
    return (
      <div className="weather">

        <h1 className="title">{weather.name}</h1>
        <div className="container">
          <div className="card">
            {/* <span className="line-title">Status:</span> */}
            <img src={this.setIconWeather(weather.weather[0].main)} alt={'iconWeather'} />
            <div className="description">{weather.weather[0].description}</div>
          </div>
          <div className="card">
            <span className="line-title">Temperature</span>
            <span className="line-value">{weatherTemp} °C</span>
          </div>
          <div className="card">
            <span className="line-title">Wind</span>
            <span className="line-value">{weather.wind.speed} m/s</span>
          </div>
          <div className="card">
            <span className="line-title">Humidity</span>
            <span className="line-value">{weather.main.humidity} %</span>
          </div>
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
