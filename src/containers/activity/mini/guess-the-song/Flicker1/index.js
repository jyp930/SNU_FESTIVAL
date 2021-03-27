import React, { useEffect } from 'react';
import useAudio from '@U/hooks/useAudio';
import Dynamite2 from '@/static/audio/bts_dynamite_2.mp3';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

Flicker1.propTypes = basePropTypes;

function Flicker1({ trigger, dispatch }) {
  const [, playAudio] = useAudio(Dynamite2);

  useEffect(() => {
    flickerRect = document.querySelector('.Flicker1');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimation(flickerRect, cancelAnimation);
      dispatch({ type: 'toggle', key: 'triggerA' });
    }
  }, [trigger]);

  return (
    <S.StyledFlicker1
      className="Flicker1"
    />
  );
}
export default React.memo(Flicker1);

let flickerRect = null;
let cancelAnimation = { listener: null };
