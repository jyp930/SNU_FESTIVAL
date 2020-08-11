import React from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';
import { Keyframes } from 'react-spring/renderprops';

function LoopKeyFrame({
  children, start, end, duration, delay, customStyle,
}) {
  const LoopMotion = Keyframes.Spring(async next => {
    while (true) {
      await next({ to: start, from: end, config: { duration }, delay });
      await next({ to: end, from: start, config: { duration }, delay: 0 });
    }
  });

  return (
    <LoopMotion>
      {styles => (
        <S.StyledLoopKeyFrame style={{ ...styles, ...customStyle }}>
          { children }
        </S.StyledLoopKeyFrame>
      )}
    </LoopMotion>
  );
}
export default LoopKeyFrame;

LoopKeyFrame.propTypes = {
  children: PropTypes.element.isRequired,
  start: PropTypes.objectOf(PropTypes.any).isRequired,
  end: PropTypes.objectOf(PropTypes.any).isRequired,
  customStyle: PropTypes.objectOf(PropTypes.any),
  duration: PropTypes.number,
  delay: PropTypes.number,
};

LoopKeyFrame.defaultProps = {
  customStyle: {},
  duration: 800,
  delay: 0,
};
