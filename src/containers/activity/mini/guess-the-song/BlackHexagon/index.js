import React, { useEffect } from 'react';
import useAudio from '@U/hooks/useAudio';
import TwentyThree from '@/static/audio/iu_twenty_three.mp3';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

BlackHexagon.propTypes = basePropTypes;

function BlackHexagon({ trigger, dispatch }) {
  const [, playAudio] = useAudio(TwentyThree);

  useEffect(() => {
    blackHexagon = document.querySelector('.BlackHexagon');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimation(blackHexagon, cancelAnimation, 1000);
      dispatch({ type: 'toggle', key: 'triggerI' });
    }
  }, [trigger]);

  return (
    <S.StyledBlackHexagon
      className="BlackHexagon"
    >
      <S.Svg viewBox="0 0 348 302">
        <circle cx="90" cy="5" r="4.5" />
        <path d="M563,188a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z" transform="translate(-473 -187)" />
        <path d="M730.86,192.75,814.72,338,730.86,483.25H563.14L479.28,338l83.86-145.25H730.86m.43-.75H562.71l-84.3,146,84.3,146H731.29l84.3-146-84.3-146Z" transform="translate(-473 -187)" />
        <circle cx="343" cy="151" r="4.5" />
        <path d="M816,334a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z" transform="translate(-473 -187)" />
        <circle cx="258" cy="5" r="4.5" />
        <path d="M731,188a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z" transform="translate(-473 -187)" />
        <circle cx="5" cy="151" r="4.5" />
        <path d="M478,334a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z" transform="translate(-473 -187)" />
        <circle cx="90" cy="297" r="4.5" />
        <path d="M563,480a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z" transform="translate(-473 -187)" />
        <circle cx="258" cy="297" r="4.5" />
        <path d="M731,480a4,4,0,1,1-4,4,4,4,0,0,1,4-4m0-1a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z" transform="translate(-473 -187)" />
      </S.Svg>
    </S.StyledBlackHexagon>
  );
}
export default React.memo(BlackHexagon);

let blackHexagon = null;
let cancelAnimation = { listener: null };
