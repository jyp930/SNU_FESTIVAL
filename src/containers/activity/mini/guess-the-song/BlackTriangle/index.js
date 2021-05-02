import React, { useEffect } from 'react';
import useAudio from '@U/hooks/useAudio';
import SongThreeFirst from '@/static/audio/song-3-1.mp3';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

BlackTriangle.propTypes = basePropTypes;

function BlackTriangle({ trigger, dispatch }) {
  const [, playAudio] = useAudio(SongThreeFirst);

  useEffect(() => {
    blackTriangle = document.querySelector('.BlackTriangle');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimation(blackTriangle, cancelAnimation, 1000);
      dispatch({ type: 'toggle', key: 'triggerG' });
    }
  }, [trigger]);

  return (
    <S.StyledBlackTriangle
      className="BlackTriangle"
    >
      <S.Svg viewBox="0 0 328 328">
        <polygon
          fill="transparent"
          points="163.85 4.99 5.2 274.5 322.5 274.5 163.85 4.99"
        />
        <circle cx="164" cy="5" r="4.5" />
        <path
          d="M672,206a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z"
          transform="translate(-508 -205)"
        />
        <circle cx="323" cy="275" r="4.5" />
        <path
          d="M831,476a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z"
          transform="translate(-508 -205)"
        />
        <circle cx="5" cy="275" r="4.5" />
        <path
          d="M513,476a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z"
          transform="translate(-508 -205)"
        />
      </S.Svg>
    </S.StyledBlackTriangle>
  );
}
export default React.memo(BlackTriangle);

let blackTriangle = null;
let cancelAnimation = { listener: null };
