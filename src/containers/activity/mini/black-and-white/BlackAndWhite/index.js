import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Rule from '@C/activity/mini/black-and-white/Rule';
import Swirl from '@I/activity/black-and-white/swirl.svg';
import Answer from '@C/activity/mini/black-and-white/Answer';
import CardConfetti from '@C/activity/mini/black-and-white/CardConfetti';
import * as S from './styles';

function BlackAndWhite() {
  return (
    <S.StyledBlackAndWhite>
      <HeaderContent backgroundColor="transparent" color="white" style={{ mixBlendMode: 'difference' }}>흑과백</HeaderContent>
      <S.Body>
        <Rule />
        <S.Zoom src={Swirl} alt="줌" />
        <Answer />
      </S.Body>
      <CardConfetti />
    </S.StyledBlackAndWhite>
  );
}
export default BlackAndWhite;

BlackAndWhite.propTypes = {
};
