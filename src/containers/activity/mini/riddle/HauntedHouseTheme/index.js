import React from 'react';
import PropTypes from 'prop-types';
import HauntedHouseBackground from '@I/activity/riddle/hounted-house/haunted-house-background.jpg';
import Castle from '@I/activity/riddle/hounted-house/castle.png';
import Moon from '@I/activity/riddle/hounted-house/moon.png';
import QuestionBox from '@C/activity/mini/riddle/QuestionBox';
import * as S from './styles';

function HauntedHouseTheme() {
  return (
    <S.StyledHauntedHouseTheme>
      <S.Background src={HauntedHouseBackground} alt="유령의 집 배경" />
      <S.Castle src={Castle} alt="성" />
      <S.Moon src={Moon} alt="달" />

      <QuestionBox answerColor="white" />
    </S.StyledHauntedHouseTheme>
  );
}
export default HauntedHouseTheme;

HauntedHouseTheme.propTypes = {

};
