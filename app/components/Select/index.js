/**
*
* Select
*
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectBox = styled.select`
  width: 100%;
  border-bottom: 1px solid gray;
  outline: none;
`;

class Select extends Component {
  // componentWillReceiveProps() {

  // }
  onChangeSelect = (e) => {
    this.props.action(e.target.value);
  }
  render() {
    const { list, defaultName } = this.props;
    return (
      <SelectBox onChange={this.onChangeSelect} defaultValue="none">
        <option value="none" disabled>{defaultName}</option>
        {list.map(
          (item, i) => <option key={`select_${i}`} value={item.id}>{item.name}</option> // eslint-disable-line
        )}
      </SelectBox>
    );
  }
}

Select.propTypes = {
  list: PropTypes.array,
  action: PropTypes.func,
  defaultName: PropTypes.string,
};

export default Select;

