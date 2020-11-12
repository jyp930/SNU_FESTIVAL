import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import {TextInputArea} from './styles';

function InputText() {
  const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
      // console.log(e.target.value);
      setValue(e.target.value);
    };
    return { value, onChange };
  };

  const name = useInput('name');
  return (
    <S.StyledInputText>
      <TextInputArea placeholder="Name" {...name} />
      {name.value}
    </S.StyledInputText>
  );
}
export default InputText;

InputText.propTypes = {

};
