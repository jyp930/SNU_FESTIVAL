import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import * as S from './styles';

function Bubble({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  return (
    <S.BubbleWrapper>
      <S.Circle
        r={150}
        cx={0}
        cy="-50"
        translate={{ x: Math.random() * 50 - 25, y: 100 + 50 }}
        fill={rgba(theme.palette.PURPLE50, 0.06)}
        index={1}
        duration={11.5}
      />
      <S.Circle
        r={20}
        cx={theme.windowWidth * (1 / 10)}
        cy="-20"
        translate={{ x: Math.random() * 50 - 15, y: 100 + 20 }}
        fill={rgba(theme.palette.PURPLE50, 0.64)}
        index={5}
        duration={7}
      />
      <S.Circle
        r={100}
        cx={theme.windowWidth * (2 / 10)}
        cy="-50"
        translate={{ x: Math.random() * 50 - 25, y: 100 + 50 }}
        fill={rgba(theme.palette.PURPLE50, 0.2)}
        index={2}
        duration={13}
      />
      <S.Circle
        r={40}
        cx={theme.windowWidth * (5 / 10)}
        cy="-40"
        translate={{ x: Math.random() * 50 - 25, y: 100 + 50 }}
        fill="transparent"
        stroke={rgba(theme.palette.PURPLE50, 0.8)}
        strokeWidth={1}
        index={6}
        duration={8.5}
      />
      <S.Circle
        r={200}
        cx={theme.windowWidth * (9 / 10)}
        cy="-200"
        translate={{ x: Math.random() * 50 - 25, y: 100 + 50 }}
        fill={rgba(theme.palette.PURPLE50, 0.1)}
        index={3}
        duration={10}
      />
      <S.Circle
        r={10}
        cx={theme.windowWidth * (7 / 10)}
        cy="-10"
        translate={{ x: Math.random() * 50 - 20, y: 100 + 15 }}
        fill={rgba(theme.palette.PURPLE50, 0.65)}
        index={7}
        duration={6.5}
      />
      { !isMobile && (
        <>
          <S.Circle
            r={450}
            cx={theme.windowWidth * (5 / 10)}
            cy="-100"
            translate={{ x: Math.random() * 50 - 20, y: 100 + 50 }}
            fill={rgba(theme.palette.PURPLE50, 0.04)}
            index={4}
            duration={13}
          />
          <S.Circle
            r={20}
            cx={theme.windowWidth * (4 / 10)}
            cy="-50"
            translate={{ x: Math.random() * 50 - 15, y: 100 + 20 }}
            fill={rgba(theme.palette.PURPLE50, 0.54)}
            index={8}
            duration={8.5}
          />
        </>
      )}
    </S.BubbleWrapper>
  );
}
export default Bubble;

Bubble.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.objectOf(PropTypes.any),
    windowWidth: PropTypes.number,
  }).isRequired,
};
