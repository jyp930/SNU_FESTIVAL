import React from 'react';
import Card from '@I/icon/stamp/card.png';
import GuestBookStamp from '@I/icon/stamp/guest-book-stamp.png';
import PerformanceMascot from '@I/icon/stamp/performance-stamp.png';
import CompetitionStamp from '@I/icon/stamp/competition-stamp.png';
import ActivityStampOne from '@I/icon/stamp/activity-stamp-1.png';
import ActivityStampTwo from '@I/icon/stamp/activity-stamp-2.png';
import useMission from '@U/hooks/useMission';
import useAuth from '@U/hooks/useAuth';
import * as S from './styles';

function MissionCard() {
  useAuth();
  const mission = useMission();

  return (
    <S.StyledMissionCard>
      <S.Card src={Card} alt="미션 카드" />
      {mission.guestBook && <S.Stamp src={GuestBookStamp} alt="방명록 도장" width={16.3} top={17.7} left={12.3} />}
      {mission.performance && <S.Stamp src={PerformanceMascot} alt="공연 도장" width={15.4} top={26.5} left={24} />}
      {mission.competition && <S.Stamp src={CompetitionStamp} alt="공모전 도장" width={18.5} top={28} left={37.5} />}
      {mission.miniOne && <S.Stamp src={ActivityStampOne} alt="행사 도장" width={31} top={8.68} left={53.25} />}
      {mission.miniTwo && <S.Stamp src={ActivityStampTwo} alt="행사 도장" width={19.1} top={3.7} left={39.3} />}
    </S.StyledMissionCard>
  );
}
export default MissionCard;

MissionCard.propTypes = {

};
