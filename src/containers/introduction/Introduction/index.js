import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { HeaderContent } from '@F/layout/Header';
import FestivalSection from '@C/introduction/FestivalSection';
import * as S from './styles';

function Introduction({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  return (
    <S.StyledIntroduction>
      <HeaderContent hasBoxShadow>축하사 소개</HeaderContent>
      <S.Body>
        <FestivalSection isMobile={isMobile} />
      </S.Body>
    </S.StyledIntroduction>
  );
}
export default withTheme(Introduction);

Introduction.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number.isRequired,
  }).isRequired,
};
