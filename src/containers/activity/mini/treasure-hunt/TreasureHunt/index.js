import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { actions } from '@/redux/mini-game/state';
import Rule from '@C/activity/mini/treasure-hunt/Rule';
import RedBalloon from '@I/activity/treasure-hunt/balloon-red.png';
import GreenBalloon from '@I/activity/treasure-hunt/balloon-green.png';
import PurpleBalloon from '@I/activity/treasure-hunt/balloon-purple.png';
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
      <HeaderContent backgroundColor="transparent">보물찾기</HeaderContent>
      <S.Body>
        <Rule />
        <S.Balloons>
          <S.Balloon src={RedBalloon} alt="" top={25} left={5} index={1} duration={2} />
          <S.Balloon src={GreenBalloon} alt="" top={40} left={40} index={2} duration={3} />
          <S.Balloon src={PurpleBalloon} alt="" top={10} right={15} index={3} duration={2.5} />
        </S.Balloons>
        <S.Button>Start</S.Button>
      </S.Body>
    </S.StyledTreasureHunt>
  );
}
export default TreasureHunt;

TreasureHunt.propTypes = {

};
