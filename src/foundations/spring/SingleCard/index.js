import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Spring, config } from 'react-spring/renderprops-universal';
import * as S from './styles';

function SingleCard() {
  const [xys, setXys] = useState([0, 0, 1]);
  const calc = useCallback((x, y) => (
    [-(y - window.innerHeight / 1.5) / 60, (x - window.innerWidth / 1.5) / 60, 1.1]),
  []);
  const trans = useCallback((x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`,
    []);

  return (
    <Spring
      config={{ ...config.gentle, duration: 800 }}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props => (
        <S.Card
          onMouseMove={({ clientX: x, clientY: y }) => setXys(calc(x, y))}
          onMouseLeave={() => setXys([0, 0, 1])}
          style={{ ...props, transform: trans(...xys) }}
        >
          IMAGE
        </S.Card>
      )}
    </Spring>
  );
}
export default SingleCard;

SingleCard.propTypes = {

};
