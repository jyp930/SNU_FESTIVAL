import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import MiniGameGuide from '@F/modal/content/MiniGameGuide';
import useInput from '@U/hooks/useInput';
import { useDispatch } from 'react-redux';
import { getPasswordFromEmail } from '@U/functions/password';
import { actions } from '@/redux/mini-game/state';
import { toast } from 'react-toastify';
import { useUser } from '@U/hooks/useAuth';
import useMiniGame from '@U/hooks/useMiniGame';
import withUser from '@U/hoc/withUser';
import * as S from './styles';

export function Answer({ user, isAuthorized, isNotCompleted }) {
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);
  const { modalComponent: miniGameModalComponent, setIsModalOpen: setIsMiniGameModalOpen } = useModal(MiniGameGuide);

  const { value, onChange } = useInput('');

  // TODO: 코드 중복
  const dispatch = useDispatch();
  const checkClear = () => {
    if (isAuthorized) {
      if (value === getPasswordFromEmail(user.email, 4, 5)) {
        if (isNotCompleted) {
          dispatch(actions.setFirestoreStage(user, 'stage4', true));
          setIsMiniGameModalOpen(true);
        } else {
          toast('이미 클리어하셨습니다 😇');
        }
      } else {
        toast('오답입니다😅');
      }
    } else {
      setIsSignInModalOpen(true);
    }
  };

  return (
    <>
      <S.StyledAnswer>
        <S.Answer>
          <S.InputBox
            value={value}
            onChange={onChange}
            placeholder="게임을 통해 획득한 패스워드 5자"
          />
          <S.Button onClick={checkClear}>
            등록
          </S.Button>
        </S.Answer>
      </S.StyledAnswer>
      {miniGameModalComponent}
      {signInModalComponent}
    </>
  );
}

Answer.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  isNotCompleted: PropTypes.bool.isRequired,
};

function AnswerParent() {
  const { user, isAuthorized } = useUser();
  const miniGame = useMiniGame();
  const isNotCompleted = useMemo(() => (
    miniGame.isLoaded && !miniGame.stage4), [miniGame.isLoaded, miniGame.stage4]);

  return <Answer user={user} isAuthorized={isAuthorized} isNotCompleted={isNotCompleted} />;
}
export default withUser(AnswerParent);
