import React, { useEffect, useMemo } from 'react';
import useAudio from '@U/hooks/useAudio';
import Dynamite2 from '@/static/audio/bts_dynamite_2.mp3';
import * as S from './styles';
import { startAnimations, getRandomElementFromArray } from '../functions';
import { basePropTypes } from '../values';

Explosion2.propTypes = basePropTypes;

function Explosion2({ trigger, dispatch }) {
  const [, playAudio] = useAudio(Dynamite2);
  const rotate = getRandomElementFromArray([0, 90, 180, 270]);

  useEffect(() => {
    ExplosionCircles = document.querySelectorAll('.Explosion2Circle');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimations(ExplosionCircles, cancelAnimation);
      dispatch({ type: 'toggle', key: 'triggerN' });
    }
  }, [trigger]);

  const Circles = useMemo(() => (
    [...Array(20).keys()].map((i) => {
      const radius = 10 + Math.random() * 8;
      return (
        <S.Group
          index={i}
          key={i}
        >
          <S.Circle
            className="Explosion2Circle"
            r={radius}
            cx="50%"
            cy="0"
            index={i}
            translate={{ x: Math.random() * 50 - 25, y: Math.random() * 75 }}
          />
        </S.Group>
      );
    })
  ), []);

  return (
    <S.StyledExplosion2
      className="Explosion2"
    >
      <S.Svg
        rotate={rotate}
      >
        {Circles}
      </S.Svg>
    </S.StyledExplosion2>
  );
}
export default React.memo(Explosion2);

let ExplosionCircles = null;
const cancelAnimation = { listener: null };
