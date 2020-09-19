import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Slider() {
  return (
    <S.StyledSlider>
      <span>FirstInSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderFirstOut</span>
      <span>SecondInSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSliderSecondOut</span>
    </S.StyledSlider>
  );
}
export default Slider;

Slider.propTypes = {

};
