import React, { useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { guestBookCollectionRef } from '@U/initializer/firebase';
import useInput from '@U/hooks/useInput';
import SignInGuide from '@F/modal/content/SignInGuide';
import useAuth, { useUser } from '@U/hooks/useAuth';
import useModal from '@U/hooks/useModal';
import * as S from './styles';

export function WriteBox({ user }) {
  const isAuthorized = useMemo(() => !!(user.uid && !user.isLoading), [user]);
  const { modalComponent, setIsModalOpen } = useModal(SignInGuide);

  const username = useInput('', nameConstraint);
  const content = useInput('', contentConstraint);

  const addToFirestore = () => guestBookCollectionRef.add({
    author: user.uid,
    username: username.value.trim(),
    content: content.value.trim(),
    likes: [],
    created_at: firebase.firestore.Timestamp.now(),
  });

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

  const checkAuthority = useCallback((e) => {
    if (!isAuthorized) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  }, [isAuthorized, setIsModalOpen]);

  return (
    <S.StyledWriteBox>
      <S.InputBox placeholder="익명" {...username} onMouseDown={checkAuthority} />
      <S.TextArea {...content} onMouseDown={checkAuthority} />
      <S.Submit onClick={isAuthorized ? Submit : checkAuthority}>등록</S.Submit>

      {modalComponent}
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
  useAuth(); // NOTE: 유저가 바뀔 때를 useEffect 로 감지하기 위함. HOC 이 더 어울릴 듯.
  const { user } = useUser();

  return <WriteBox user={user} />;
}
export default WriteBoxParent;
