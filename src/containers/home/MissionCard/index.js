import React from 'react';
import PropTypes from 'prop-types';
import Card from '@I/icon/stamp/card.png';
import GuestBookStamp from '@I/icon/stamp/guest-book-stamp.png';
import PerformanceMascot from '@I/icon/stamp/performance-stamp.png';
import CompetitionStamp from '@I/icon/stamp/competition-stamp.png';
import ActivityStampOne from '@I/icon/stamp/activity-stamp-1.png';
import ActivityStampTwo from '@I/icon/stamp/activity-stamp-2.png';
import * as S from './styles';

function MissionCard() {
  return (
    <S.StyledMissionCard>
      <S.Card src={Card} alt="미션 카드" />
      <S.Stamp src={GuestBookStamp} alt="방명록 도장" width={16.3} top={17.7} left={12.3} />
      <S.Stamp src={PerformanceMascot} alt="공연 도장" width={15.4} top={26.5} left={24} />
      <S.Stamp src={CompetitionStamp} alt="공모전 도장" width={18.5} top={28} left={37.5} />
      <S.Stamp src={ActivityStampOne} alt="행사 도장" width={31} top={8.68} left={53.25} />
      <S.Stamp src={ActivityStampTwo} alt="행사 도장" width={19.1} top={3.7} left={39.3} />
    </S.StyledMissionCard>
  );
}
export default MissionCard;

MissionCard.propTypes = {

};
