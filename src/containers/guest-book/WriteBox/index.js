import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { firestore } from '@U/initializer/firebase';
import useInput from '@U/hooks/useInput';
import * as S from './styles';

function WriteBox() {
  const username = useInput('', nameConstraint);
  const content = useInput('', contentConstraint);

  const addToFirestore = () => {
    const collectionRef = firestore.collection('guest-book');
    return collectionRef.add({
      author: 'jyp930',
      username: username.value.trim(),
      content: content.value.trim(),
      likes: [],
      created_at: firebase.firestore.Timestamp.now(),
    });
  };

  const toastId = React.useRef(0);
  const Submit = () => {
    if (!toast.isActive(toastId.current)) {
      if (username.value.trim() === '') {
        toastId.current = toast('아이디를 입력해 주세요');
      } else if (content.value.trim() === '') {
        toastId.current = toast('내용을 입력해 주세요');
      } else {
        username.setValue('');
        content.setValue('');
        addToFirestore().then(() => {
          toastId.current = toast('등록되었습니다!');
        });
      }
    }
  };

  return (
    <S.StyledWriteBox>
      <S.InputBox placeholder="익명" {...username} />
      <S.TextArea {...content} />
      <S.Submit onClick={Submit}>등록</S.Submit>
    </S.StyledWriteBox>
  );
}
export default WriteBox;

WriteBox.propTypes = {

};

function nameConstraint(value) {
  const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]*$/;
  return value.length <= 20 && regex.test(value);
}

function contentConstraint(value) {
  return value.length <= 200 && value.split('\n').length <= 5;
}
