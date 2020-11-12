import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Slider({ children, className }) {
  return (
    <S.StyledSlider
      className={className}
    >
      {children}
      {children}
      {children}
    </S.StyledSlider>
  );
}
export default Slider;

Slider.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

Slider.defaultProps = {
  className: null,
};
