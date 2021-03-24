import React, { useCallback, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { firestore } from '@U/initializer/firebase';
import useInput from '@U/hooks/useInput';
import { shallowEqual, useSelector } from 'react-redux';
import PopupModal from '@F/modal/PopupModal';
import * as S from './styles';

function WriteBox({ user }) {
  const isAuthorized = useMemo(() => !!(user.uid && !user.isLoading), [user]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const username = useInput('', nameConstraint);
  const content = useInput('', contentConstraint);

  const addToFirestore = () => {
    // TODO: firestore 규칙으로 권한 체크
    const collectionRef = firestore.collection('guest-book');
    return collectionRef.add({
      author: user.uid,
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

  const checkAuthority = useCallback(() => {
    if (!isAuthorized) {
      setIsModalOpen(true);
    }
  }, [isAuthorized]);

  return (
    <S.StyledWriteBox>
      <S.InputBox placeholder="익명" {...username} onClick={checkAuthority} />
      <S.TextArea {...content} onClick={checkAuthority} />
      <S.Submit onClick={isAuthorized ? Submit : checkAuthority}>
        등록
      </S.Submit>

      <PopupModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <div>로그인이 필요합니다</div>
      </PopupModal>
    </S.StyledWriteBox>
  );
}

WriteBox.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
  }).isRequired,
};

function nameConstraint(value) {
  const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]*$/;
  return value.length <= 20 && regex.test(value);
}

function contentConstraint(value) {
  return value.length <= 200 && value.split('\n').length <= 5;
}

function WriteBoxParent() {
  const user = useSelector(state => ({
    uid: state.user.uid,
    isLoading: state.user.isLoading,
  }), shallowEqual);

  return <WriteBox user={user} />;
}
export default WriteBoxParent;
