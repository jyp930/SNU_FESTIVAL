import React, { useEffect } from 'react';
import useAudio from '@U/hooks/useAudio';
import SongTwoFirst from '@/static/audio/song-2-1.mp3';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

Flicker3.propTypes = basePropTypes;

function Flicker3({ trigger, dispatch }) {
  const [, playAudio] = useAudio(SongTwoFirst);

  useEffect(() => {
    flickerRect = document.querySelector('.Flicker3');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimation(flickerRect, cancelAnimation);
      dispatch({ type: 'toggle', key: 'triggerC' });
    }
  }, [trigger]);

  return (
    <S.StyledFlicker3
      className="Flicker3"
    />
  );
}
export default React.memo(Flicker3);

let flickerRect = null;
let cancelAnimation = { listener: null };
