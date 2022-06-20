import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.styles';

function Input( {type, inputId, placeholder, value, handleChange} ) {
  return (
    <S.Block>
      <S.Input 
      id={inputId}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      />
    </S.Block>

  )
}

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password"]),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default Input
