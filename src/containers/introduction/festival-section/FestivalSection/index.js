import React from 'react';
import PropTypes from 'prop-types';
import BasicInfoSection from '@C/introduction/festival-section/BasicInfoSection';
import PromotionVideoSection from '@C/introduction/festival-section/PromotionVideoSection';
import PublisherSection from '@C/introduction/festival-section/PublisherSection';
import * as S from './styles';

function FestivalSection({ isMobile }) {
  return (
    <S.StyledFestivalSection>
      <BasicInfoSection isMobile={isMobile} />
      <PromotionVideoSection />
      <PublisherSection />
    </S.StyledFestivalSection>
  );
}
export default FestivalSection;

FestivalSection.propTypes = {
  isMobile: PropTypes.bool,
};

FestivalSection.defaultProps = {
  isMobile: false,
};
