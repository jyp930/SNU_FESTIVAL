import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
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
import { useHistory } from 'react-router';
import { getRandomElementFromArray } from '@C/activity/mini/guess-the-song/functions';
import Loading from '@I/home/loading.png';
import Title from '@C/home/Title';
import Notice from '@C/home/Notice';
import useModal from '@U/hooks/useModal';
import MissionCard from '@C/home/MissionCard';
import * as S from './styles';

function Home({ theme }) {
  const [isLoading, setIsLoading] = useState(true);

  const ratio = useMemo(() => {
    if (theme.windowWidth >= 1700) return 1;
    if (theme.windowWidth >= 1600) return 1600 / 1700;
    if (theme.windowWidth >= 1440) return 1440 / 1700;
    if (theme.windowWidth >= 1024) return 1024 / 1700;
    return 768 / 1700;
  }, [theme.windowWidth]);

  const history = useHistory();
  const goToPage = useCallback((route) => {
    history.push(route);
  }, [history]);

  const { modalComponent: missionComponent, setIsModalOpen: setIsMissionModalOpen } = useModal(MissionCard);

  return (
    <>
      <S.StyledHome height={1700 * ratio * 0.527}>
        <Title />
        <S.IslandWrapper width={1700 * ratio} height={1700 * ratio * 0.527}>
          <S.Island src={Island} width={1700 * ratio} height={1700 * ratio * 0.527} alt="" onLoad={() => setIsLoading(false)} />
          <Notice />
          <S.Landmark src={Competition} alt="공모전" top={11} right={29} width={150 * ratio} onClick={() => goToPage('/activity/competition')} />
          <S.Landmark src={GuestBook} alt="방명록" top={24} right={13} width={188 * ratio} onClick={() => goToPage('/guest-book')} />
          <S.Landmark src={Introduction} alt="소개" top={32} right={28} width={168 * ratio} onClick={() => goToPage('/introduction')} />
          <S.Landmark src={GameTournament} alt="관악게임토너먼트" top={44} right={10} width={230 * ratio} onClick={() => goToPage('/performance/game-tournament')} />
          <S.Landmark src={Mini} alt="미니게임" top={52} right={24} width={381 * ratio} onClick={() => goToPage('/activity/mini')} />
          <S.Landmark src={Radio} alt="보이는라디오" top={37} left={12.5} width={262 * ratio} onClick={() => goToPage('/activity/radio')} />
          <S.Landmark src={Goods} alt="굿즈" top={12.5} left={24} width={234 * ratio} onClick={() => goToPage('/goods')} />
          <S.Landmark src={Mission} alt="미션" top={25} left={45} width={225 * ratio} vibrate onClick={() => setIsMissionModalOpen(true)} />
          {missionComponent}
          <S.Landmark
            src={Performance}
            alt="공연"
            top={45}
            left={26}
            width={258 * ratio}
            onClick={() => goToPage(getRandomElementFromArray(['/performance/phone-cert', '/performance/sing-stealer', '/performance/hit-the-stage']))}
          />
          {isLoading && <S.Island width={1700 * ratio} height={1700 * ratio * 0.527} src={Loading} alt="" />}
        </S.IslandWrapper>
      </S.StyledHome>
      <Background />
    </>
  );
}
export default Home;

Home.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
