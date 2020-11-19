import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Slider({ children }) {
  return (
    <S.SliderWrapper>
      <S.StyledSlider>
        <S.FlexContainer>
          {children}
          {children}
          {children}
        </S.FlexContainer>
      </S.StyledSlider>
    </S.SliderWrapper>
  );
}
export default Slider;

Slider.propTypes = {
  children: PropTypes.element.isRequired,
};
