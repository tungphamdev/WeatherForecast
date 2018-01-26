/**
*
* Select
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectBox = styled.select`
  width: 100%;
  border-bottom: 1px solid gray;
  outline: none;
`;

const Select = ({ list, action, defaultName }) => {
  function onChangeSelect(e) {
    action(e.target.value);
  }

  return (
    <SelectBox onChange={onChangeSelect} defaultValue="none">
      <option value="none" disabled>{defaultName}</option>
      {list.map(
        (item) => <option key={item.id} value={item.id}>{item.name}</option>
      )}
    </SelectBox>
  );
};

Select.propTypes = {
  list: PropTypes.array,
  action: PropTypes.func,
  defaultName: PropTypes.string,
};

export default Select;
