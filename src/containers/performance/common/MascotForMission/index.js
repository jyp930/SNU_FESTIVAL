import React, { useCallback, useEffect, useMemo } from 'react';
import PhoneCertMascot from '@I/performance/mascot-phone-cert.svg';
import SingStealerMascot from '@I/performance/mascot-sing-stealer.svg';
import HitTheStageMascot from '@I/performance/mascot-hit-the-stage.svg';
import GameTournamentMascot from '@I/performance/mascot-game-tournament.svg';
import PerformanceMascot from '@I/icon/stamp/performance-stamp.png';

import PropTypes from 'prop-types';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { actions } from '@/redux/performance/state';
import { actions as missionActions } from '@/redux/mission/state';

import { toast } from 'react-toastify';
import useAuth, { useUser } from '@U/hooks/useAuth';
import useMission from '@U/hooks/useMission';
import useModal from '@U/hooks/useModal';
import SignInGuide from '@F/modal/content/SignInGuide';
import MissionGuide from '@F/modal/content/MissionGuide';
import * as S from './styles';

const images = {
  phoneCert: PhoneCertMascot,
  singStealer: SingStealerMascot,
  hitTheStage: HitTheStageMascot,
  gameTournament: GameTournamentMascot,
};

function MascotForMission({ performance }) {
  useAuth();
  const { modalComponent: signInModalComponent, setIsModalOpen: setIsSignInModalOpen } = useModal(SignInGuide);
  const { modalComponent: missionModalComponent, setIsModalOpen: setIsMissionModalOpen } = useModal(MissionGuide, {
    name: '공연',
    stamp: PerformanceMascot,
  });

  const performanceMission = useSelector(state => state.performanceMission, shallowEqual);
  const currentCatches = useMemo(() => (
    [
      performanceMission.singStealer,
      performanceMission.phoneCert,
      performanceMission.hitTheStage,
      performanceMission.gameTournament,
    ].filter(Boolean).length
  ), [performanceMission]);

  const dispatch = useDispatch();
  const { user, isAuthorized } = useUser();
  const catchTheMascot = useCallback(() => {
    if (isAuthorized) {
      toast(`고릴라리온를 잡았습니다! (${currentCatches + 1}/4)`);
      dispatch(actions.setValue(performance, true));
    } else {
      setIsSignInModalOpen(true);
    }
  }, [performance, currentCatches, dispatch, setIsSignInModalOpen, isAuthorized]);

  const mission = useMission();
  const isNotCompletedYet = useMemo(() => mission.isLoaded && !mission.performance, [mission.isLoaded, mission.performance]);
  useEffect(() => {
    if (isAuthorized && isNotCompletedYet && currentCatches >= 4) {
      dispatch(missionActions.setFirestoreMission(user, 'performance', true));
      setIsMissionModalOpen(true);
    }
  }, [currentCatches, user, isAuthorized, isNotCompletedYet, dispatch, setIsMissionModalOpen]);

  const top = useMemo(() => 15 + Math.random() * 70, []);
  const left = useMemo(() => 15 + Math.random() * 70, []);

  return (
    <>
      { ((!user.isLoading && !isAuthorized) || isNotCompletedYet) && !performanceMission[performance] && (
        <S.Mascot
          src={images[performance]}
          alt="미션마스코드"
          top={top}
          left={left}
          onClick={catchTheMascot}
        />
      )}

      {signInModalComponent}
      {missionModalComponent}
    </>
  );
}
export default MascotForMission;

MascotForMission.propTypes = {
  performance: PropTypes.string.isRequired,
};
