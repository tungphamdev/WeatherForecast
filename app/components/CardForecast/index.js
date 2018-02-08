/**
*
* CardForecast
*
*/

import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components';
import cloud from '../../icons/cloudy5.png';
import mist from '../../icons/mist.png';
import dunno from '../../icons/dunno.png';
import clear from '../../icons/cloudy1.png';
import shower from '../../icons/shower3.png';

import './forecast.css';

class CardForecast extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
      case 'Rain':
        return shower;
      default:
        return dunno;
    }
  }
  render() {
    const weather = this.props.forecastData;
    const weatherTemp = Math.round(weather.main.temp - 273.15);

    return (
      <div className="forecast-card">
        <div className="line-title">{weather.dt_txt}</div>
        <div className="forecast-icon">
          <img src={this.setIconWeather(weather.weather[0].main)} alt={'iconWeather'} />
          <div className="forecast-description line-title">{weather.weather[0].description}</div>
        </div>
        <div className="forecast-item">
          <div>Temperature</div>
          <div>{weatherTemp} °C</div>
        </div>
        <div className="forecast-item">
          <span className="line-title">Wind</span>
          <span className="line-value">{weather.wind.speed} m/s</span>
        </div>
        <div className="forecast-item">
          <span className="line-title">Humidity</span>
          <span className="line-value">{weather.main.humidity} %</span>
        </div>
      </div>
    );
  }
}

CardForecast.propTypes = {
  forecastData: PropTypes.object,
};

export default CardForecast;
