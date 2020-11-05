import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import * as S from './styles';

function WriteBox() {
  const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const onChange = e => {
      // console.log(e.target.value);
      setValue(e.target.value);
    };
    return { value, onChange, setValue };
  };

  const Id = useInput('');
  const Password = useInput('');
  const Text = useInput('');

  const toastId = React.useRef(0);
  const Submit = () => {
    if (!toast.isActive(toastId.current)) {
      if (Id.value === '') toastId.current = toast('아이디를 입력해 주세요');
      else if (Password.value === '') toastId.current = toast('비밀번호를 입력해 주세요');
      else if (Text.value === '') toastId.current = toast('내용을 입력해 주세요');
      else {
        toastId.current = toast('등록되었습니다!');
        Id.setValue('');
        Password.setValue('');
        Text.setValue('');
      }
    }
  };

  return (
    <S.StyledWriteBox>
      <S.StyledContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
      <S.IdPassword>
        <S.InputBox placeholder="익명" maxLength="20" {...Id} />
        <S.InputBox placeholder="비밀번호" maxLength="20" {...Password} />
      </S.IdPassword>
      <S.TextArea placeholder="내용" maxLength="400" {...Text} />
      <S.Submit onClick={Submit}>등록</S.Submit>
    </S.StyledWriteBox>
  );
}
export default WriteBox;

WriteBox.propTypes = {

};
