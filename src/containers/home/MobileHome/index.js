import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import MobileIsland from '@I/home/island-mobile.jpg';
import Competition from '@I/home/competition.png';
import GuestBook from '@I/home/guest-book.png';
import Introduction from '@I/home/introduction.png';
import GameTournament from '@I/home/game-tournament.png';
import Mini from '@I/home/mini.png';
import Performance from '@I/home/performance.png';
import Radio from '@I/home/radio.png';
import Goods from '@I/home/goods.png';
import Mission from '@I/home/mission.png';
import Bell from '@I/icon/bell.svg';
import * as S from './styles';

function MobileHome({ theme }) {
  const ratio = useMemo(() => theme.windowWidth / 375, [theme.windowWidth]);
  const mobileRatio = 0.68;

  return (
    <>
      <S.StyledMobileHome>
        <HeaderContent
          backgroundColor="transparent"
          fixed
        >
          <S.Title>
            <p>서울대학교 2021 봄축제</p>
            <p>페스월드</p>
          </S.Title>
        </HeaderContent>
        <S.IslandWrapper width={theme.windowWidth} height={theme.windowWidth * 2.1653}>
          <S.Island src={MobileIsland} alt="" />
          <S.NoticeWrapper>
            <S.Notice>
              <img src={Bell} alt="" />
              <p>2021 봄축제 [페스월드] 전체 타임테이블</p>
            </S.Notice>
          </S.NoticeWrapper>
          <S.Landmark src={Competition} alt="공모전" top={35} left={0} width={150 * mobileRatio * ratio} />
          <S.Landmark src={GuestBook} alt="방명록" top={87} left={20} width={188 * mobileRatio * ratio} />
          <S.Landmark src={Introduction} alt="소개" top={42} right={1} width={148 * mobileRatio * ratio} />
          <S.Landmark src={GameTournament} alt="관악게임토너먼트" top={72} right={1} width={230 * mobileRatio * ratio} />
          <S.Landmark src={Mini} alt="미니게임" top={50} left={0} width={381 * mobileRatio * ratio} />
          <S.Landmark src={Performance} alt="공연" top={15} right={0.1} width={230 * mobileRatio * ratio} />
          <S.Landmark src={Radio} alt="보이는라디오" top={72} left={0.1} width={262 * mobileRatio * ratio} />
          <S.Landmark src={Goods} alt="굿즈" top={16} left={7} width={234 * mobileRatio * ratio} />
          <S.Landmark src={Mission} alt="미션" top={35} left={35} width={195 * mobileRatio * ratio} />
        </S.IslandWrapper>
      </S.StyledMobileHome>
      <S.Background />
    </>
  );
}
export default MobileHome;

MobileHome.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
