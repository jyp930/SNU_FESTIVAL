import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import sal from 'sal.js';
import * as S from './styles';

function Sal({ children, animation, duration, delay }) {
  useEffect(() => {
    sal();
  }, []);

  return (
    <S.StyledSal
      data-sal={animation}
      data-sal-easing="ease"
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
  animation: PropTypes.string,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

Sal.defaultProps = {
  animation: 'fade',
  duration: 0,
  delay: 0,
};
