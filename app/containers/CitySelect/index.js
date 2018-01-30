/**
 *
 * CitySelect
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import styled from 'styled-components';

import Select from 'components/Select';

import { makeCitySelected, makeCountrySelected } from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as cityActions from './actions';
import cityList from './city.list.min.json';
import countryList from './country_codes.json';
const SelectWrapper = styled.div`
  margin-top: 20px;
`;

export class CitySelect extends React.Component { // eslint-disable-line react/prefer-stateless-function
  selectCityByCountry = (country) => {
    const cities = cityList.filter((city) => { // eslint-disable-line
      return city.country === country;
    });
    return cities;
  };
  render() {
    // const countries = cityList.map((city) => { // eslint-disable-line
    //   return city.country;
    // });
    // console.log(countries);
    return (
      <SelectWrapper>
        <Select list={countryList} defaultName={'Choose a country'} action={this.props.actions.selectCountry} />
        <Select list={this.selectCityByCountry(this.props.countrySelect)} action={this.props.actions.selectCity} defaultName={'Choose a city'} />
      </SelectWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  citySelect: makeCitySelected(),
  countrySelect: makeCountrySelected(),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(cityActions, dispatch),
});

CitySelect.propTypes = {
  actions: PropTypes.object,
  countrySelect: PropTypes.string,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'city', reducer });
const withSaga = injectSaga({ key: 'city', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CitySelect);
