import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Background from '@F/layout/Background';
import Rule from '@C/activity/mini/home/Rule';
import GameSection from '@C/activity/mini/home/GameSection';
import * as S from './styles';

function MiniGame({ theme }) {
  return (
    <>
      <S.StyledMiniGame>
        <HeaderContent backgroundColor="transparent" color={theme.palette.PURPLE50}>미니게임</HeaderContent>
        <S.Body>
          <Rule />
          <GameSection />
        </S.Body>
      </S.StyledMiniGame>
      <Background />
    </>
  );
}
export default MiniGame;

MiniGame.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.objectOf(PropTypes.any),
    windowWidth: PropTypes.number,
  }).isRequired,
};
