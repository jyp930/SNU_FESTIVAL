import React, { useMemo, useState } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/vote/TextSection';
import Carousel from '@F/carousel/Carousel';
import * as S from './styles';

function Vote({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const [currentPerformanceIndex, setCurrentPerformanceIndex] = useState(0);

  return (
    <S.StyledVote>
      <HeaderContent>공연</HeaderContent>
      <S.Body>
        <TextSection isMobile={isMobile} />
        <S.CarouselWrapper>
          <Carousel fullHeight={isMobile ? 300 : theme.windowWidth / 3} fullWidth={theme.windowWidth / 2} />
        </S.CarouselWrapper>
      </S.Body>
    </S.StyledVote>
  );
}
export default withTheme(Vote);

Vote.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number.isRequired,
  }).isRequired,
};
