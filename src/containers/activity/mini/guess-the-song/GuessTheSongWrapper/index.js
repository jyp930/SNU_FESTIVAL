import React from 'react';
import PropTypes from 'prop-types';
import GuessTheSong from '@C/activity/mini/guess-the-song/GuessTheSong';
import { HeaderContent } from '@F/layout/Header';
import Rule from '@C/activity/mini/guess-the-song/Rule';
import Answer from '@C/activity/mini/guess-the-song/Answer';
import * as S from './styles';

function GuessTheSongWrapper() {
  return (
    <>
      <HeaderContent absolute backgroundColor="transparent">노래 맞히기</HeaderContent>
      <GuessTheSong />
      <Rule />
      <Answer />
    </>
  );
}
export default GuessTheSongWrapper;

GuessTheSongWrapper.propTypes = {

};
