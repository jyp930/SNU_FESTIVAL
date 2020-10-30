import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

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
    <S.StyledWriteBox>
      <S.IdPassword>
        <S.InputBox placeholder="Id" maxLength="20" {...Id} />
        <S.InputBox placeholder="Password" maxLength="20" {...Password} />
      </S.IdPassword>
      <S.TextArea placeholder="Text" maxLength="400" {...Text} />
      <S.Submit>등록</S.Submit>
    </S.StyledWriteBox>
  );
}
export default WriteBox;

WriteBox.propTypes = {

};
