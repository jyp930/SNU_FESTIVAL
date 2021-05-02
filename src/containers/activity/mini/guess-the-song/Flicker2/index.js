import React, { useEffect } from 'react';
import useAudio from '@U/hooks/useAudio';
import SongTwoSecond from '@/static/audio/song-2-2.mp3';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

Flicker2.propTypes = basePropTypes;

function Flicker2({ trigger, dispatch }) {
  const [, playAudio] = useAudio(SongTwoSecond);

  useEffect(() => {
    flickerRect = document.querySelector('.Flicker2');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimation(flickerRect, cancelAnimation);
      dispatch({ type: 'toggle', key: 'triggerB' });
    }
  }, [trigger]);

  return (
    <S.StyledFlicker2
      className="Flicker2"
    />
  );
}
export default React.memo(Flicker2);

let flickerRect = null;
let cancelAnimation = { listener: null };
