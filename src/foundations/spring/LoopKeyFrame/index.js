import React from 'react';
import PropTypes from 'prop-types';
import { Keyframes } from 'react-spring/renderprops';

function LoopKeyFrame({
  children, start, end, duration, delay,
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
        <div style={styles}>
          { children }
        </div>
      )}
    </LoopMotion>
  );
}
export default LoopKeyFrame;

LoopKeyFrame.propTypes = {
  children: PropTypes.element.isRequired,
  start: PropTypes.objectOf(PropTypes.any).isRequired,
  end: PropTypes.objectOf(PropTypes.any).isRequired,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

LoopKeyFrame.defaultProps = {
  duration: 800,
  delay: 0,
};
