import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HauntedHouseBackground from '@I/activity/riddle/hounted-house/haunted-house-background.jpg';
import QuestionBox from '@C/activity/mini/riddle/QuestionBox';
import * as S from './styles';

function HauntedHouseTheme() {
  return (
    <S.StyledHauntedHouseTheme>
      <S.Background src={HauntedHouseBackground} alt="유령의 집 배경" />
      <QuestionBox answerColor="white" />
    </S.StyledHauntedHouseTheme>
  );
}
export default HauntedHouseTheme;

HauntedHouseTheme.propTypes = {

};
