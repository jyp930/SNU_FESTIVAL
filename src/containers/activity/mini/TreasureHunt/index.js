import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { actions } from '@/redux/mini-game/state';
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
      <HeaderContent>보물찾기</HeaderContent>
      <S.Body>
        <button onClick={startTreasureHunt}>보물찾기 시작</button>
        <button onClick={endTreasureHunt}>정답!</button>
        <button onClick={pushTreasureHunt}>보물 찾음</button>
      </S.Body>
    </S.StyledTreasureHunt>
  );
}
export default TreasureHunt;

TreasureHunt.propTypes = {

};
