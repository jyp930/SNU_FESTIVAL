import React, { useMemo } from 'react';
import { HeaderContent } from '@F/layout/Header';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { actions } from '@/redux/mini-game/state';
import Rule from '@C/activity/mini/treasure-hunt/Rule';
import Balloons from '@C/activity/mini/treasure-hunt/Balloons';
import Clouds from '@C/activity/mini/treasure-hunt/Clouds';
import Answer from '@C/activity/mini/treasure-hunt/Answer';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import * as S from './styles';

function TreasureHunt() {
  const { treasureHunt } = useSelector(state => ({
    treasureHunt: state.miniGame.treasureHunt,
  }), shallowEqual);
  const dispatch = useDispatch();
  const isPlaying = useMemo(() => treasureHunt !== null, [treasureHunt]);

  const history = useHistory();
  const startTreasureHunt = () => {
    dispatch(actions.startTreasureHunt());
    toast('🎈 보물 찾기 시작 🎈');
    history.push('/activity/group');
  };

  const endTreasureHunt = () => {
    dispatch(actions.endTreasureHunt());
    toast('보물 찾기 정보 초기화 😇');
  };

  return (
    <S.StyledTreasureHunt>
      <S.Background />
      <Clouds />
      <HeaderContent backgroundColor="transparent">보물찾기</HeaderContent>
      <S.Body>
        <Rule />
        <Balloons />
        {!isPlaying && <S.Button onClick={startTreasureHunt}>Start</S.Button>}
        {isPlaying && <S.Button onClick={endTreasureHunt}>Reset</S.Button>}
        <div style={{ height: '3rem' }} />
        <Answer />
      </S.Body>
    </S.StyledTreasureHunt>
  );
}
export default TreasureHunt;

TreasureHunt.propTypes = {

};
