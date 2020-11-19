import React from 'react';
import * as S from './styles';
import ChiefSpeech from '@C/introduction/ChiefSpeech';
import PosterSlider from '@C/introduction/PosterSlider';
import Information from '@C/introduction/Information';

function Introduction() {
  return (
    <S.StyledIntroduction>
      <ChiefSpeech />
      <PosterSlider />
      <Information />
    </S.StyledIntroduction>
  );
}
export default Introduction;

Introduction.propTypes = {

};
