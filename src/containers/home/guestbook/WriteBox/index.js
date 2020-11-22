import React from 'react';
import * as S from './styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { firestore } from '@U/initializer/firebase';
import useInput from '@U/hooks/useInput';

function WriteBox({ lastComment }) {
  const username = useInput('');
  const password = useInput('');
  const content = useInput('', contentConstraint);

  const testFirebase = () => {
    const docRef = firestore.collection('guestbook').doc('comments');
    return docRef.update({
      comments: firebase.firestore.FieldValue.arrayUnion(({
        id: (lastComment?.id ?? 0) + 1,
        username: username.value,
        password: password.value,
        content: content.value,
        created_at: firebase.firestore.Timestamp.now(),
      })),
    });
  };

  const toastId = React.useRef(0);
  const Submit = () => {
    if (!toast.isActive(toastId.current)) {
      // TODO: validation 함수 분리
      if (username.value === '') toastId.current = toast('아이디를 입력해 주세요');
      else if (password.value === '') toastId.current = toast('비밀번호를 입력해 주세요');
      else if (content.value === '') toastId.current = toast('내용을 입력해 주세요');
      else {
        username.setValue('');
        password.setValue('');
        content.setValue('');
        testFirebase().then(() => {
          toastId.current = toast('등록되었습니다!');
        });
      }
    }
  };

  return (
    <S.StyledWriteBox>
      <S.IdPassword>
        <S.InputBox placeholder="익명" maxLength="20" {...username} />
        <S.InputBox placeholder="비밀번호" maxLength="20" {...password} />
      </S.IdPassword>
      <S.TextArea placeholder="내용" maxLength="400" {...content} />
      <S.Submit onClick={Submit}>등록</S.Submit>
    </S.StyledWriteBox>
  );
}
export default WriteBox;

WriteBox.propTypes = {
  lastComment: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.string,
    content: PropTypes.string,
    created_at: PropTypes.shape({
      nanoseconds: PropTypes.number,
      seconds: PropTypes.number, // unix time
    }),
  }),
};

function contentConstraint(value) {
  return value.split('\n').length < 6;
}
