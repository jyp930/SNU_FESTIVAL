import React, { useEffect, useMemo } from 'react';
import { withTheme } from 'styled-components';
import useAudio from '@U/hooks/useAudio';
import Celebrity from '@/static/audio/iu_celebrity.mp3';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

HorizontalLine2.propTypes = basePropTypes;

function HorizontalLine2({ trigger, dispatch, theme }) {
  const [, playAudio] = useAudio(Celebrity);

  const svgHeight = useMemo(() => theme.windowHeight / 2, [theme.windowHeight]);
  const rectHeight = useMemo(() => (
    svgHeight > (rectCount * 10) ? (svgHeight - (rectCount * 10)) / rectCount : 0), [svgHeight]);
  const reverse = Math.random() > 0.5;

  useEffect(() => {
    flickerRect = document.querySelector('.HorizontalLine2');
  }, []);

  useEffect(() => {
    if (trigger) {
      playAudio();
      startAnimation(flickerRect, cancelAnimation);
      dispatch({ type: 'toggle', key: 'triggerK' });
    }
  }, [trigger]);

  return (
    <S.StyledHorizontalLine2
      className="HorizontalLine2"
      height={svgHeight * 2}
    >
      <S.Svg
        reverse={reverse}
        style={{ width: svgHeight * 2, height: svgHeight }}
      >
        {[...Array(rectCount).keys()].map((index) => (
          <S.Rect x="0" y={(((svgHeight - rectHeight) / (rectCount - 1)) * index)} width="100%" height={rectHeight} key={index} />
        ))}
      </S.Svg>
    </S.StyledHorizontalLine2>
  );
}
export default React.memo(withTheme(HorizontalLine2));

const rectCount = 5;
let flickerRect = null;
let cancelAnimation = { listener: null };
