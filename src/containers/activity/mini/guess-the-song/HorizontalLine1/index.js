import React, { useEffect, useMemo } from 'react';
import { withTheme } from 'styled-components';
import useAudio from '@U/hooks/useAudio';
import SongFourFirst from '@/static/audio/song-4-1.mp3';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

HorizontalLine1.propTypes = basePropTypes;

function HorizontalLine1({ trigger, dispatch, theme }) {
  const [, playAudio] = useAudio(SongFourFirst);

  const svgHeight = useMemo(() => theme.windowHeight / 2, [theme.windowHeight]);
  const reverse = Math.random() > 0.5;

  useEffect(() => {
    flickerRect = document.querySelector('.HorizontalLine1');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimation(flickerRect, cancelAnimation);
      dispatch({ type: 'toggle', key: 'triggerJ' });
    }
  }, [trigger]);

  return (
    <S.StyledHorizontalLine1
      className="HorizontalLine1"
      height={svgHeight * 2}
    >
      <S.Svg
        reverse={reverse}
        style={{ width: svgHeight * 2, height: svgHeight }}
      >
        <S.Rect x="0" y="0" width="100%" height={svgHeight} />
      </S.Svg>
    </S.StyledHorizontalLine1>
  );
}
export default React.memo(withTheme(HorizontalLine1));

let flickerRect = null;
let cancelAnimation = { listener: null };
