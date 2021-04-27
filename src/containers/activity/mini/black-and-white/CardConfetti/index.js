import React, { useMemo } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Confetti from '@F/animation/Confetti';
import Card0 from '@I/activity/black-and-white/card-0.svg';
import Card1 from '@I/activity/black-and-white/card-1.svg';
import Card2 from '@I/activity/black-and-white/card-2.svg';
import Card3 from '@I/activity/black-and-white/card-3.svg';
import Card4 from '@I/activity/black-and-white/card-4.svg';
import * as S from './styles';

function CardConfetti({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  return (
    <S.StyledCardConfetti>
      <Confetti
        max={isMobile ? 5 : 7}
        svgs={[
          { src: Card0, size: isMobile ? 85 : 130 },
          { src: Card1, size: isMobile ? 70 : 100 },
          { src: Card2, size: isMobile ? 85 : 130 },
          { src: Card3, size: isMobile ? 70 : 100 },
          { src: Card4, size: isMobile ? 85 : 130 },
        ]}
      />
    </S.StyledCardConfetti>
  );
}
export default withTheme(CardConfetti);

CardConfetti.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
