import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import { useHistory } from 'react-router';
import { miniGameCollectionRef } from '@U/initializer/firebase';
import { useUser } from '@U/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { actions } from '@/redux/mini-game/state';
import * as S from './styles';

export function MiniGame({ user, isAuthorized }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isClear, setIsClear] = useState(false);

  useEffect(() => {
    if (isAuthorized) {
      dispatch(actions.setLoading(true));
      miniGameCollectionRef.doc(user.uid).get()
        .then((doc) => {
          if (doc.exists) {
            const stages = doc.data();
            dispatch(actions.setMiniGame(stages));
          } else {
            dispatch(actions.createNewMiniGame(user));
          }
        })
        .finally(() => {
          dispatch(actions.setLoading(false));
        });
    }
  }, [user, isAuthorized, dispatch]);

  const checkClear = () => {
    miniGameCollectionRef.doc(user.uid).get()
      .then((doc) => {
        if (doc.exists) {
          const stages = doc.data();
          const newIsClear = Object.values(stages).every(stage => stage === true);
          setIsClear(newIsClear);
        }
      });
  };

  const go = (url) => {
    history.push(`/activity/mini/${url}`);
  };

  return (
    <S.StyledMiniGame>
      <HeaderContent>미니게임</HeaderContent>
      <S.Body>
        <button onClick={() => go('guess-the-song')}>노래맞히기</button>
        <button onClick={() => go('treasure-hunt')}>보물찾기</button>
        <button onClick={() => go('riddle')}>미궁게임</button>
        <button onClick={() => go('black-and-white')}>흑과백</button>
        <br />
        <br />
        <br />
        <button onClick={() => checkClear()}>클리어?!</button>
        <div>{isClear ? '클리어 함' : '클리어 못함'}</div>
      </S.Body>
    </S.StyledMiniGame>
  );
}

MiniGame.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
  }).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

function MiniGameParent() {
  const { user, isAuthorized } = useUser();

  return <MiniGame user={user} isAuthorized={isAuthorized} />;
}
export default MiniGameParent;
