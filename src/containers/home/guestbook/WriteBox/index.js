import React from 'react';
import * as S from './styles';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { firestore } from '@U/initializer/firebase';
import useInput from '@U/hooks/useInput';
import { sha512 } from 'js-sha512';

function WriteBox() {
  const username = useInput('');
  const password = useInput('', passwordConstraint);
  const content = useInput('', contentConstraint);

  const addToFirestore = () => {
    const collectionRef = firestore.collection('guestbook');
    return collectionRef.add({
      username: username.value.trim(),
      // NOTE: 비밀번호는 sha512로 암호화
      password: sha512(password.value),
      content: content.value.trim(),
      created_at: firebase.firestore.Timestamp.now(),
    });
  };

  const toastId = React.useRef(0);
  const Submit = () => {
    if (!toast.isActive(toastId.current)) {
      if (username.value.trim() === '') {
        toastId.current = toast('아이디를 입력해 주세요');
      } else if (password.value.trim() === '') {
        toastId.current = toast('비밀번호를 입력해 주세요');
      } else if (content.value.trim() === '') {
        toastId.current = toast('내용을 입력해 주세요');
      } else {
        username.setValue('');
        password.setValue('');
        content.setValue('');
        addToFirestore().then(() => {
          toastId.current = toast('등록되었습니다!');
        });
      }
    }
  };

  return (
    <S.StyledWriteBox>
      <S.IdPassword>
        <S.InputBox placeholder="익명" maxLength="20" {...username} />
        <form>
          <S.InputBox placeholder="비밀번호" maxLength="20" type="password" autoComplete="off" {...password} />
        </form>
      </S.IdPassword>
      <S.TextArea placeholder="내용" maxLength="200" {...content} />
      <S.Submit onClick={Submit}>등록</S.Submit>
    </S.StyledWriteBox>
  );
}
export default WriteBox;

WriteBox.propTypes = {

};

function contentConstraint(value) {
  return value.split('\n').length < 6;
}

function passwordConstraint(value) {
  const regExpPw = /^[0-9a-zA-Z~!@#$%^&*()_?+=-]{0,20}$/;
  return regExpPw.test(value);
}
