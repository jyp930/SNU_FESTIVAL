import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { HeaderContent } from '@F/layout/Header';
import FestivalSection from '@C/introduction/festival-section/FestivalSection';
import StaffSection from '@C/introduction/staff-section/StaffSection';
import * as S from './styles';

function Introduction({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  return (
    <S.StyledIntroduction>
      <HeaderContent hasBoxShadow>축하사 소개</HeaderContent>
      <S.Body>
        <FestivalSection isMobile={isMobile} />
        <StaffSection />
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
