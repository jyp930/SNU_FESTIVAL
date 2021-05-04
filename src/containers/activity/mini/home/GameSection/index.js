import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import withUser from '@U/hoc/withUser';
import GuessTheSong from '@I/activity/home/guess-the-song.png';
import Riddle from '@I/activity/home/riddle.png';
import TreasureHunt from '@I/activity/home/treasure-hunt.png';
import BlackAndWhite from '@I/activity/home/black-and-white.png';
import Clear from '@I/activity/home/clear.png';
import Complete from '@I/activity/home/complete.png';
import { useHistory } from 'react-router';
import useMiniGame from '@U/hooks/useMiniGame';
import useModal from '@U/hooks/useModal';
import PolaroidGuide from '@C/activity/mini/home/PolaroidGuide';
import * as S from './styles';

function GameSection() {
  const miniGame = useMiniGame();
  const history = useHistory();
  const goToPage = useCallback((route) => {
    history.push(route);
  }, [history]);
  const { modalComponent: PolaroidModalComponent, setIsModalOpen: setPolaroidModalOpen } = useModal(PolaroidGuide);

  return (
    <>
      <S.StyledGameSection>
        <S.GameWrapper>
          <S.Game onClick={() => goToPage('/activity/mini/guess-the-song')}>
            <img src={GuessTheSong} alt="노래맞히기" />
            {miniGame.stage1 && <S.Complete src={Complete} alt="완료" />}
          </S.Game>
          <S.Game onClick={() => goToPage('/activity/mini/treasure-hunt')}>
            <img src={TreasureHunt} alt="보물찾기" />
            {miniGame.stage2 && <S.Complete src={Complete} alt="완료" />}
          </S.Game>
          <S.Game onClick={() => goToPage('/activity/mini/riddle')}>
            <img src={Riddle} alt="미궁게임" />
            {miniGame.stage3 && <S.Complete src={Complete} alt="완료" />}
          </S.Game>
          <S.Game onClick={() => goToPage('/activity/mini/black-and-white')}>
            <img src={BlackAndWhite} alt="흑과백" />
            {miniGame.stage4 && <S.Complete src={Complete} alt="완료" />}
          </S.Game>
        </S.GameWrapper>
        <S.ClearButton onClick={() => setPolaroidModalOpen(true)}>
          <img src={Clear} alt="클리어" />
        </S.ClearButton>
      </S.StyledGameSection>
      {PolaroidModalComponent}
    </>
  );
}
export default withUser(GameSection);

GameSection.propTypes = {

};
