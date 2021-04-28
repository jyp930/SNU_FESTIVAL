import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import GuessTheSong from '@I/activity/home/guess-the-song.png';
import Riddle from '@I/activity/home/riddle.png';
import TreasureHunt from '@I/activity/home/treasure-hunt.png';
import BlackAndWhite from '@I/activity/home/black-and-white.png';
import Clear from '@I/activity/home/clear.png';
import { useHistory } from 'react-router';
import * as S from './styles';

function GameSection() {
  const history = useHistory();
  const goToPage = useCallback((route) => {
    history.push(route);
  }, [history]);

  return (
    <S.StyledGameSection>
      <S.GameWrapper>
        <S.Game onClick={() => goToPage('/activity/mini/guess-the-song')}>
          <img src={GuessTheSong} alt="노래맞히기" />
        </S.Game>
        <S.Game onClick={() => goToPage('/activity/mini/treasure-hunt')}>
          <img src={TreasureHunt} alt="보물찾기" />
        </S.Game>
        <S.Game onClick={() => goToPage('/activity/mini/riddle')}>
          <img src={Riddle} alt="미궁게임" />
        </S.Game>
        <S.Game onClick={() => goToPage('/activity/mini/black-and-white')}>
          <img src={BlackAndWhite} alt="흑과백" />
        </S.Game>
      </S.GameWrapper>
      <S.ClearButton>
        <img src={Clear} alt="클리어" />
      </S.ClearButton>
    </S.StyledGameSection>
  );
}
export default GameSection;

GameSection.propTypes = {

};
