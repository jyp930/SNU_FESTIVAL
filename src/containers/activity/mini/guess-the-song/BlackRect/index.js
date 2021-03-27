import React, { useEffect } from 'react';
import useAudio from '@U/hooks/useAudio';
import TwentyThree2 from '@/static/audio/iu_twenty_three_2.mp3';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

BlackRect.propTypes = basePropTypes;

function BlackRect({ trigger, dispatch }) {
  const [, playAudio] = useAudio(TwentyThree2);

  useEffect(() => {
    blackRect = document.querySelector('.BlackRect');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimation(blackRect, cancelAnimation, 1000);
      dispatch({ type: 'toggle', key: 'triggerH' });
    }
  }, [trigger]);

  return (
    <S.StyledBlackRect
      className="BlackRect"
    >
      <S.Svg viewBox="0 0 311 311">
        <rect x="5.5" y="5.5" width="300" height="300" fill="transparent" />
        <path d="M857,197V496H558V197H857m1-1H557V497H858V196Z" transform="translate(-552 -191)" />
        <circle cx="6" cy="5" r="4.5" />
        <path
          d="M558,192a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z"
          transform="translate(-552 -191)"
        />
        <circle cx="306" cy="5" r="4.5" />
        <path
          d="M858,192a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z"
          transform="translate(-552 -191)"
        />
        <circle cx="5" cy="306" r="4.5" />
        <path
          d="M557,493a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z"
          transform="translate(-552 -191)"
        />
        <circle cx="306" cy="306" r="4.5" />
        <path
          d="M858,493a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z"
          transform="translate(-552 -191)"
        />
      </S.Svg>
    </S.StyledBlackRect>
  );
}
export default React.memo(BlackRect);

let blackRect = null;
let cancelAnimation = { listener: null };
