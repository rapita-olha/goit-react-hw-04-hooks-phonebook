import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  font-size: 25px;
  cursor: pointer;
`;
const Input = styled.input`
  max-width: 200px;
  height: 10px;
  margin-left: 30px;
  padding: 20px 10px;
  background: #bebebe;
  color: #036103;
  border: 2px solid red;
  border-radius: 10px;
`;
function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Filter, Input, Label };
