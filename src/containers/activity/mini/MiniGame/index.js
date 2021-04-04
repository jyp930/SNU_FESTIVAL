import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import * as S from './styles';

function MiniGame() {
  return (
    <S.StyledMiniGame>
      <HeaderContent>미니게임</HeaderContent>
      <S.Body />
    </S.StyledMiniGame>
  );
}
export default MiniGame;

MiniGame.propTypes = {

};
