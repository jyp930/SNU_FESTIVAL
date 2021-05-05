import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useUser } from '@U/hooks/useAuth';
import { actions } from '@/redux/mission/state';
import useModal from '@U/hooks/useModal';
import MissionGuide from '@F/modal/content/MissionGuide';
import ActivityStampOne from '@I/icon/stamp/activity-stamp-1.png';
import ActivityStampTwo from '@I/icon/stamp/activity-stamp-2.png';
import { useDispatch } from 'react-redux';
import { miniGameCollectionRef } from '@U/initializer/firebase';
import useMission from '@U/hooks/useMission';
import * as S from './styles';

function Mission() {
  const { user, isAuthorized } = useUser();
  const mission = useMission();
  const isNotCompletedYetOne = useMemo(() => mission.isLoaded && !mission.miniOne, [mission.isLoaded, mission.miniOne]);
  const isNotCompletedYetTwo = useMemo(() => mission.isLoaded && !mission.miniTwo, [mission.isLoaded, mission.miniTwo]);

  const { modalComponent: missionOneModalComponent, setIsModalOpen: setIsMissionOneModalOpen } = useModal(MissionGuide, {
    name: '미니게임',
    stamp: ActivityStampOne,
  });
  const { modalComponent: missionTwoModalComponent, setIsModalOpen: setIsMissionTwoModalOpen } = useModal(MissionGuide, {
    name: '미니게임',
    stamp: ActivityStampTwo,
  });

  const [clearCount, setClearCount] = useState(0);
  useEffect(() => {
    if (isAuthorized) {
      miniGameCollectionRef.doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          setClearCount(Object.values(doc.data()).filter(Boolean).length);
        }
      });
    }
  }, [isAuthorized]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthorized && isNotCompletedYetOne && clearCount >= 1) {
      dispatch(actions.setFirestoreMission(user, 'miniOne', true));
      setIsMissionOneModalOpen(true);
    } else if (isAuthorized && isNotCompletedYetTwo && clearCount >= 3) {
      dispatch(actions.setFirestoreMission(user, 'miniTwo', true));
      setIsMissionTwoModalOpen(true);
    }
  }, [dispatch, isAuthorized, isNotCompletedYetOne, isNotCompletedYetTwo, clearCount, setIsMissionOneModalOpen, setIsMissionTwoModalOpen]);

  return (
    <S.StyledMission>
      {missionOneModalComponent}
      {missionTwoModalComponent}
    </S.StyledMission>
  );
}
export default Mission;

Mission.propTypes = {

};
