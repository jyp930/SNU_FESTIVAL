import React, { useMemo } from 'react';
import useInput from '@U/hooks/useInput';
import { toast } from 'react-toastify';
import { useUser } from '@U/hooks/useAuth';
import withUser from '@U/hoc/withUser';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import { actions } from '@/redux/mini-game/state';
import useMiniGame from '@U/hooks/useMiniGame';
import MiniGameGuide from '@F/modal/content/MiniGameGuide';
import * as S from './styles';

const answers = ['삐딱하게', '봄날', '2002', '오랜날오랜밤', '라일락'];

export function Answer({ user, isAuthorized, isNotCompleted }) {
  const { value: first, onChange: onChangeFirst } = useInput('', answerConstraint);
  const { value: second, onChange: onChangeSecond } = useInput('', answerConstraint);
  const { value: third, onChange: onChangeThird } = useInput('', answerConstraint);

  const correctAnswers = useMemo(() => (
    new Set([first, second, third].filter(answer => answers.includes(answer)))
  ), [first, second, third]);

  const dispatch = useDispatch();
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);
  const { modalComponent: miniGameModalComponent, setIsModalOpen: setIsMiniGameModalOpen } = useModal(MiniGameGuide);

  const submit = () => {
    const correctCount = correctAnswers.size;
    if (correctCount < 3) {
      toast(`오답입니다😅 (${correctCount}/3)`);
      return;
    }

    if (isAuthorized) {
      if (isNotCompleted) {
        dispatch(actions.setFirestoreStage(user, 'stage1', true));
        setIsMiniGameModalOpen(true);
      } else {
        toast('이미 클리어하셨습니다😇');
      }
    } else {
      setIsSignInModalOpen(true);
    }
  };

  return (
    <>
      <S.StyledAnswer>
        <S.Inputs>
          <S.InputBox placeholder="뭐게요" value={first} onChange={onChangeFirst} />
          <S.InputBox placeholder="맞혀봐요" value={second} onChange={onChangeSecond} />
          <S.InputBox placeholder="응?" value={third} onChange={onChangeThird} />
        </S.Inputs>
        <S.Button onClick={submit}>정답!</S.Button>
      </S.StyledAnswer>
      {signInModalComponent}
      {miniGameModalComponent}
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

const AnswerParent = withUser(() => {
  const { user, isAuthorized } = useUser();
  const miniGame = useMiniGame();
  const isNotCompleted = useMemo(() => (
    miniGame.isLoaded && !miniGame.stage1), [miniGame.isLoaded, miniGame.stage1]);

  return <Answer user={user} isAuthorized={isAuthorized} isNotCompleted={isNotCompleted} />;
});
export default AnswerParent;

function answerConstraint(value) {
  const regex = /^[ㄱ-ㅎ가-힣0-9]*$/;
  return value.length <= 6 && regex.test(value);
}
