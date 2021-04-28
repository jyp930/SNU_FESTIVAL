import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { HeaderContent } from '@F/layout/Header';
import Island from '@I/home/island.png';
import Competition from '@I/home/competition.png';
import GuestBook from '@I/home/guest-book.png';
import Introduction from '@I/home/introduction.png';
import GameTournament from '@I/home/game-tournament.png';
import Mini from '@I/home/mini.png';
import Performance from '@I/home/performance.png';
import Radio from '@I/home/radio.png';
import Goods from '@I/home/goods.png';
import Mission from '@I/home/mission.png';
import Background from '@F/layout/Background';
import * as S from './styles';

function Home({ theme }) {
  const ratio = useMemo(() => {
    if (theme.windowWidth >= 1700) return 1;
    if (theme.windowWidth >= 1600) return 1600 / 1700;
    if (theme.windowWidth >= 1440) return 1440 / 1700;
    if (theme.windowWidth >= 1170) return 1170 / 1700;
    return 768 / 1700;
  }, [theme.windowWidth]);

  return (
    <>
      <S.StyledHome height={1700 * ratio * 0.527}>
        <HeaderContent
          backgroundColor="transparent"
          fixed
        >
          <S.Title>
            <p>서울대학교 2021 봄축제</p>
            <p>페스월드</p>
          </S.Title>
        </HeaderContent>
        <S.IslandWrapper width={1700 * ratio} height={1700 * ratio * 0.527}>
          <S.Island src={Island} width={1700 * ratio} height={1700 * ratio * 0.527} alt="" />
          <S.Landmark src={Competition} alt="공모전" top={11} right={29} width={150 * ratio} />
          <S.Landmark src={GuestBook} alt="방명록" top={24} right={13} width={188 * ratio} />
          <S.Landmark src={Introduction} alt="소개" top={32} right={28} width={168 * ratio} />
          <S.Landmark src={GameTournament} alt="관악게임토너먼트" top={44} right={10} width={230 * ratio} />
          <S.Landmark src={Mini} alt="미니게임" top={52} right={24} width={381 * ratio} />
          <S.Landmark src={Performance} alt="공연" top={45} left={26} width={258 * ratio} />
          <S.Landmark src={Radio} alt="보이는라디오" top={37} left={12.5} width={262 * ratio} />
          <S.Landmark src={Goods} alt="굿즈" top={12.5} left={24} width={234 * ratio} />
          <S.Landmark src={Mission} alt="미션" top={25} left={45} width={225 * ratio} />
        </S.IslandWrapper>
      </S.StyledHome>
      <Background />
    </>
  );
}
export default withTheme(Home);

Home.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
