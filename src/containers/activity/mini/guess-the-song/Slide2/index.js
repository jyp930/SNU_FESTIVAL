import React, { useEffect } from 'react';
import useAudio from '@U/hooks/useAudio';
import Blueming from '@/static/audio/iu_blueming.mp3';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

Slide2.propTypes = basePropTypes;

function Slide2({ trigger, dispatch }) {
  const [, playAudio] = useAudio(Blueming);
  const reverse = Math.random() > 0.5;

  useEffect(() => {
    slideRect = document.querySelector('.Slide2');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimation(slideRect, cancelAnimation, 1000);
      dispatch({ type: 'toggle', key: 'triggerE' });
    }
  }, [trigger]);

  return (
    <S.StyledSlide2
      className="Slide2"
    >
      <S.Svg
        reverse={reverse}
      >
        <S.Rect x="0" y="0" />
      </S.Svg>
    </S.StyledSlide2>
  );
}
export default React.memo(Slide2);

let slideRect = null;
let cancelAnimation = { listener: null };
