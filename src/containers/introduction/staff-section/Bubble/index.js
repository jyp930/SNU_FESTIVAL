import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { rgba } from 'polished';
import * as S from './styles';

function Bubble({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  return (
    <S.BubbleWrapper>
      <S.Circle
        r={200}
        cx={theme.windowWidth * (9 / 10)}
        cy="-200"
        translate={{ x: Math.random() * 50 - 25, y: 100 + 50 }}
        fill={rgba(theme.palette.PURPLE50, 0.1)}
        index={1}
        duration={10}
      />
      <S.Circle
        r={30}
        cx={theme.windowWidth * (7 / 10)}
        cy="-50"
        translate={{ x: Math.random() * 50 - 20, y: 100 + 15 }}
        fill={rgba(theme.palette.PURPLE50, 0.45)}
        index={2}
        duration={8}
      />
      <S.Circle
        r={20}
        cx={theme.windowWidth * (1 / 10)}
        cy="-100"
        translate={{ x: Math.random() * 50 - 15, y: 100 + 20 }}
        fill={rgba(theme.palette.PURPLE50, 0.64)}
        index={3}
        duration={7}
      />
      <S.Circle
        r={150}
        cx={0}
        cy="-100"
        translate={{ x: Math.random() * 50 - 25, y: 100 + 50 }}
        fill={rgba(theme.palette.PURPLE50, 0.06)}
        index={4}
        duration={13}
      />
      { !isMobile && (
        <>
          <S.Circle
            r={450}
            cx={theme.windowWidth * (5 / 10)}
            cy="-100"
            translate={{ x: Math.random() * 50 - 20, y: 100 + 50 }}
            fill={rgba(theme.palette.PURPLE50, 0.03)}
            index={5}
            duration={11}
          />
          <S.Circle
            r={20}
            cx={theme.windowWidth * (4 / 10)}
            cy="-100"
            translate={{ x: Math.random() * 50 - 15, y: 100 + 20 }}
            fill={rgba(theme.palette.PURPLE50, 0.54)}
            index={6}
            duration={7.5}
          />
        </>
      )}
    </S.BubbleWrapper>
  );
}
export default withTheme(Bubble);

Bubble.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.objectOf(PropTypes.any),
    windowWidth: PropTypes.number,
  }).isRequired,
};
