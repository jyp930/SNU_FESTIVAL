import React, { useMemo } from 'react';
import withUser from '@U/hoc/withUser';
import PropTypes from 'prop-types';
import { getPasswordFromEmail } from '@U/functions/password';
import useInput from '@U/hooks/useInput';
import { useUser } from '@U/hooks/useAuth';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import { toast } from 'react-toastify';
import MiniGameGuide from '@F/modal/content/MiniGameGuide';
import { actions } from '@/redux/mini-game/state';
import { useDispatch } from 'react-redux';
import useMiniGame from '@U/hooks/useMiniGame';
import * as S from './styles';

export function Answer({ user, isAuthorized, isNotCompleted }) {
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);
  const { modalComponent: miniGameModalComponent, setIsModalOpen: setIsMiniGameModalOpen } = useModal(MiniGameGuide);

  const { value, onChange } = useInput('');

  const dispatch = useDispatch();
  const checkClear = () => {
    if (isAuthorized) {
      if (value === getPasswordFromEmail(user.email, 2, 3)) {
        if (isNotCompleted) {
          dispatch(actions.setFirestoreStage(user, 'stage2', true));
          setIsMiniGameModalOpen(true);
          dispatch(actions.endTreasureHunt());
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
            placeholder="풍선에서 얻은 패스워드 3자"
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
    miniGame.isLoaded && !miniGame.stage2), [miniGame.isLoaded, miniGame.stage2]);

  return <Answer user={user} isAuthorized={isAuthorized} isNotCompleted={isNotCompleted} />;
}
export default withUser(AnswerParent);
