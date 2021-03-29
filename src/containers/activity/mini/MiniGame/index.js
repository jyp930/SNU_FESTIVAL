import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import { useHistory } from 'react-router';
import * as S from './styles';

function MiniGame() {
  const history = useHistory();

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
      </S.Body>
    </S.StyledMiniGame>
  );
}
export default MiniGame;

MiniGame.propTypes = {

};
