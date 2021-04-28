import React from 'react';
import PropTypes from 'prop-types';
import GuessTheSong from '@I/activity/home/guess-the-song.png';
import Riddle from '@I/activity/home/riddle.png';
import TreasureHunt from '@I/activity/home/treasure-hunt.png';
import BlackAndWhite from '@I/activity/home/black-and-white.png';
import Clear from '@I/activity/home/clear.png';
import * as S from './styles';

function GameSection() {
  return (
    <S.StyledGameSection>
      <S.GameWrapper>
        <S.Game>
          <img src={GuessTheSong} alt="노래맞히기" />
        </S.Game>
        <S.Game>
          <img src={TreasureHunt} alt="보물찾기" />
        </S.Game>
        <S.Game>
          <img src={Riddle} alt="미궁게임" />
        </S.Game>
        <S.Game>
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
