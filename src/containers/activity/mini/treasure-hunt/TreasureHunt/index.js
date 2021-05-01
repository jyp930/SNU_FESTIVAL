import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { actions } from '@/redux/mini-game/state';
import Rule from '@C/activity/mini/treasure-hunt/Rule';
import Balloons from '@C/activity/mini/treasure-hunt/Balloons';
import Clouds from '@C/activity/mini/treasure-hunt/Clouds';
import Answer from '@C/activity/mini/treasure-hunt/Answer';
import * as S from './styles';

function TreasureHunt() {
  const { treasureHunt } = useSelector(state => ({
    treasureHunt: state.miniGame.treasureHunt,
  }), shallowEqual);
  const dispatch = useDispatch();

  const startTreasureHunt = () => {
    dispatch(actions.startTreasureHunt());
  };

  const endTreasureHunt = () => {
    dispatch(actions.endTreasureHunt());
  };

  const pushTreasureHunt = () => {
    dispatch(actions.pushTreasureHunt('aa'));
  };

  return (
    <S.StyledTreasureHunt>
      <S.Background />
      <Clouds />
      <HeaderContent backgroundColor="transparent">보물찾기</HeaderContent>
      <S.Body>
        <Rule />
        <Balloons />
        <S.Button>Start</S.Button>
        <div style={{ height: '3rem' }} />
        <Answer />
      </S.Body>
    </S.StyledTreasureHunt>
  );
}
export default TreasureHunt;

TreasureHunt.propTypes = {

};
