import React from 'react';
import GuessTheSong from '@C/activity/mini/guess-the-song/GuessTheSong';
import { HeaderContent } from '@F/layout/Header';
import Rule from '@C/activity/mini/guess-the-song/Rule';
import Answer from '@C/activity/mini/guess-the-song/Answer';

function GuessTheSongWrapper() {
  return (
    <>
      <HeaderContent fixed backgroundColor="transparent">노래 맞히기</HeaderContent>
      <GuessTheSong />
      <Rule />
      <Answer />
    </>
  );
}
export default GuessTheSongWrapper;

GuessTheSongWrapper.propTypes = {

};
