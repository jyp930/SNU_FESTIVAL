import React, { useEffect } from 'react';
import useAudio from '@U/hooks/useAudio';
import SongOneThird from '@/static/audio/song-1-3.mp3';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

Slide1.propTypes = basePropTypes;

function Slide1({ trigger, dispatch }) {
  const [, playAudio] = useAudio(SongOneThird);

  const rotate = Math.random() * 360;
  const scale = 1.8 + Math.random() * 0.5;

  useEffect(() => {
    slideRect = document.querySelector('.Slide1');
    animate = document.querySelector('.Slide1 animate');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimation(slideRect, cancelAnimation, 750);
      animate.beginElement();
      dispatch({ type: 'toggle', key: 'triggerD' });
    }
  }, [trigger]);

  return (
    <S.StyledSlide1
      className="Slide1"
    >
      <S.Svg
        viewBox="0 0 435 435"
        rotate={rotate}
        scale={scale}
      >
        <S.Path
          d="M858.5,334.5c-3,100.07-87,217-217,217-119.85,0-217-97.15-217-217,0-128.56,114.35-214.53,217-217,93.57-2.25,156.09,65.4,162,72C812.36,199.4,860.88,255.45,858.5,334.5Z"
          transform="translate(-424 -117)"
        >
          <animate
            attributeName="d"
            dur="0.35s"
            to="M858.5,334.5c12,11.18-61.1,217-217,217-119.85,0-217-97.15-217-217,0-142.92,152.2-241.65,217-217,78.51,29.86,40.71,245.44,118,265C805.05,394,850.87,327.42,858.5,334.5Z"
            fill="freeze"
          />
        </S.Path>
      </S.Svg>
    </S.StyledSlide1>
  );
}
export default React.memo(Slide1);

let slideRect = null;
let animate = null;
const cancelAnimation = { listener: null };
