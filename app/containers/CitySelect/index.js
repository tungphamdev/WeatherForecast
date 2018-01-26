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

import { makeCitySelected } from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as cityActions from './actions';
import cityList from './city.json';

const SelectWrapper = styled.div`
  margin-top: 20px;
`;

export class CitySelect extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SelectWrapper>
        <Select list={cityList} action={this.props.actions.selectCity} defaultName={'Choose a city'} />
      </SelectWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  citySelect: makeCitySelected(),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(cityActions, dispatch),
});

CitySelect.propTypes = {
  actions: PropTypes.object,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'city', reducer });
const withSaga = injectSaga({ key: 'city', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CitySelect);
