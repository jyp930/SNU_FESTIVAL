import React, { useEffect, useMemo } from 'react';
import { withTheme } from 'styled-components';
import useAudio from '@U/hooks/useAudio';
import SongFourThird from '@/static/audio/song-4-3.mp3';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

HorizontalLine3.propTypes = basePropTypes;

function HorizontalLine3({ trigger, dispatch, theme }) {
  const [, playAudio] = useAudio(SongFourThird);

  const svgHeight = useMemo(() => theme.windowHeight / 2, [theme.windowHeight]);
  const rectHeight = useMemo(() => (
    svgHeight > (rectCount * 8) ? (svgHeight - (rectCount * 8)) / rectCount : 0), [svgHeight]);
  const reverse = Math.random() > 0.5;

  useEffect(() => {
    flickerRect = document.querySelector('.HorizontalLine3');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimation(flickerRect, cancelAnimation);
      dispatch({ type: 'toggle', key: 'triggerL' });
    }
  }, [trigger]);

  return (
    <S.StyledHorizontalLine3
      className="HorizontalLine3"
      height={2 * svgHeight}
    >
      <S.Svg
        reverse={reverse}
        style={{ width: 2 * svgHeight, height: svgHeight }}
      >
        {[...Array(rectCount).keys()].map((index) => (
          <S.Rect x="0" y={(((svgHeight - rectHeight) / (rectCount - 1)) * index)} width="100%" height={rectHeight} key={index} />
        ))}
      </S.Svg>
    </S.StyledHorizontalLine3>
  );
}
export default React.memo(withTheme(HorizontalLine3));

const rectCount = 9;
let flickerRect = null;
let cancelAnimation = { listener: null };
