import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import sal from 'sal.js';
import * as S from './styles';

function Sal({ children, animation, duration, delay, easing, threshold }) {
  useEffect(() => {
    sal({ threshold });
  }, [threshold]);

  return (
    <S.StyledSal
      data-sal={animation}
      data-sal-easing={easing}
      data-sal-duration={duration}
      data-sal-delay={delay}
    >
      { children }
    </S.StyledSal>
  );
}
export default Sal;

Sal.propTypes = {
  children: PropTypes.element.isRequired,
  animation: PropTypes.oneOf([
    'fade',
    'slide-up',
    'slide-down',
    'slide-left',
    'slide-right',
    'zoom-in',
    'zoom-out',
    'flip-up',
    'flip-down',
    'flip-left',
    'flip-right',
  ]),
  easing: PropTypes.string,
  duration: PropTypes.number,
  delay: PropTypes.number,
  threshold: PropTypes.number,
};

Sal.defaultProps = {
  animation: 'fade',
  easing: 'ease',
  duration: 0,
  delay: 0,
  threshold: 0.5,
};
