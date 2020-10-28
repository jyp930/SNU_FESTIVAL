import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import {TextInputArea} from '@F/Guestbook/InputText/styles';

function WriteBox() {
  const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
      // console.log(e.target.value);
      setValue(e.target.value);
    };
    return { value, onChange };
  };

  const Id = useInput('');
  const Password = useInput('');
  const Text = useInput('');

  return (
    <div>
      <S.StyledWriteBox>
        <S.IdPassword>
          <S.InputBox placeholder="Id" maxLength="20" {...Id} />
          <S.InputBox placeholder="Password" maxLength="20" {...Password} />
        </S.IdPassword>
        <S.TextArea placeholder="Text" maxLength="400" {...Text} />

      </S.StyledWriteBox>
      <button type="button">등록</button>
      {Text.value}
      {Id.value}
      {Password.value}

    </div>
  );
}
export default WriteBox;

WriteBox.propTypes = {

};
