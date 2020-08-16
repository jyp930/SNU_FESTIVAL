import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Spring, config } from 'react-spring/renderprops-universal';
import * as S from './styles';

function SingleCard({ width, height }) {
  const [xys, setXys] = useState([0, 0, 1]);
  const calc = useCallback((x, y) => [-(y - height / 2) / 60, (x - width / 2) / 60, 1],
    [width, height]);
  const trans = useCallback((x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`,
    []);

  return (
    <Spring
      config={{ ...config.gentle, duration: 800 }}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <S.Test
          onMouseMove={({ clientX: x, clientY: y }) => setXys(calc(x, y))}
          onMouseLeave={() => setXys([0, 0, 1])}
          style={{ ...props, transform: trans(...xys) }}
        >
          IMAGE
        </S.Test>
      )}
    </Spring>
  );
}
export default SingleCard;

SingleCard.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

SingleCard.defaultProps = {
  width: 500,
  height: 500,
};
