import React, { useEffect, useMemo } from 'react';
import useAudio from '@U/hooks/useAudio';
import Dynamite2 from '@/static/audio/bts_dynamite_2.mp3';
import * as S from './styles';
import { startAnimations } from '../functions';
import { basePropTypes } from '../values';

Explosion1.propTypes = basePropTypes;

function Explosion1({ trigger, dispatch }) {
  const [, playAudio] = useAudio(Dynamite2);
  const rotate = Math.random() * 360;

  useEffect(() => {
    ExplosionCircles = document.querySelectorAll('.Explosion1Circle');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimations(ExplosionCircles, cancelAnimation);
      dispatch({ type: 'toggle', key: 'triggerM' });
    }
  }, [trigger]);

  const Circles = useMemo(() => (
    [...Array(15).keys()].map((i) => {
      const radius = 12 + Math.random() * 8;
      return (
        <S.Circle
          className="Explosion1Circle"
          r={radius}
          cx="50%"
          cy="50%"
          fill="white"
          index={i}
          key={i}
          translate={{ x: Math.random() * 50, y: Math.random() * 50 }}
        />
      );
    })
  ), []);

  return (
    <S.StyledExplosion1
      className="Explosion1"
    >
      <S.Svg
        rotate={rotate}
      >
        {Circles}
      </S.Svg>
    </S.StyledExplosion1>
  );
}
export default React.memo(Explosion1);

let ExplosionCircles = null;
const cancelAnimation = { listener: null };
