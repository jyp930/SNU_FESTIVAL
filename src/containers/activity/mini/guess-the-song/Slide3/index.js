import React, { useEffect } from 'react';
import useAudio from '@U/hooks/useAudio';
import Blueming from '@/static/audio/iu_blueming.mp3';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

Slide3.propTypes = basePropTypes;

function Slide3({ trigger, dispatch }) {
  const [, playAudio] = useAudio(Blueming);
  const reverse = Math.random() > 0.5;

  useEffect(() => {
    slideRect = document.querySelector('.Slide3');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimation(slideRect, cancelAnimation, 1000);
      dispatch({ type: 'toggle', key: 'triggerF' });
    }
  }, [trigger]);

  return (
    <S.StyledSlide3
      className="Slide3"
    >
      <S.Svg
        reverse={reverse}
      >
        <S.Rect x="0" y="0" />
      </S.Svg>
    </S.StyledSlide3>
  );
}
export default React.memo(Slide3);

let slideRect = null;
let cancelAnimation = { listener: null };
