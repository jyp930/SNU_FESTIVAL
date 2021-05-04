import React, { useMemo, useState } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/activity/group/TextSection';
import Celebration from '@I/activity/group/celebration.png';
import LiveSection from '@C/activity/group/LiveSection';
import RankingSection from '@C/activity/group/RankingSection';
import RedBalloon from '@I/activity/treasure-hunt/balloon-red.png';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '@U/hooks/useAuth';
import { getPasswordFromEmail } from '@U/functions/password';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import withUser from '@U/hoc/withUser';
import TreasureGuide from '@C/activity/mini/treasure-hunt/TreasureGuide';
import { actions } from '@/redux/mini-game/state';
import * as S from './styles';

function Group({ theme }) {
  const [hideImage, setHideImage] = useState(false);
  const treasureHunt = useSelector(state => state.miniGame.treasureHunt);
  const dispatch = useDispatch();
  const isPlaying = useMemo(() => (
    treasureHunt !== null && !treasureHunt.includes(1)
  ), [treasureHunt]);

  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const { user, isAuthorized } = useUser();
  const password = useMemo(() => getPasswordFromEmail(user.email, 2, 3)[0], [user]);
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);
  const { modalComponent: treasureModalComponent, setIsModalOpen: setIsTreasureModalOpen } = useModal(TreasureGuide, { password, url: '/goods' });

  const findTreasure = () => {
    if (isAuthorized) {
      dispatch(actions.pushTreasureHunt(1));
      setIsTreasureModalOpen(true);
    } else {
      setIsSignInModalOpen(true);
    }
  };

  return (
    <S.StyledGroup>
      <HeaderContent>단체게임</HeaderContent>
      <S.Body>
        <TextSection />
        <S.ImageWrapper>
          <S.Image src={Celebration} alt="물렁팥죽 축전" />
          { isPlaying && (
            <>
              {!hideImage && <S.Image src={Celebration} alt="물렁팥죽 축전" isFake onClick={() => setHideImage(true)} />}
              <S.Balloon src={RedBalloon} alt="" bottom={isMobile ? -15 : -10} left={5} duration={2} onClick={findTreasure} />
            </>
          )}
          {signInModalComponent}
          {treasureModalComponent}
        </S.ImageWrapper>
        <LiveSection />
        <RankingSection />
      </S.Body>
      <S.Button>줌 링크 바로가기</S.Button>
    </S.StyledGroup>
  );
}
export default withTheme(withUser(Group));

Group.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
