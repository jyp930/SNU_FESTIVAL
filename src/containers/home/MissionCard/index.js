import React from 'react';
import PropTypes from 'prop-types';
import Card from '@I/icon/stamp/card.png';
import * as S from './styles';

function MissionCard() {
  return (
    <S.StyledMissionCard>
      <S.Card src={Card} alt="미션 카드" />
    </S.StyledMissionCard>
  );
}
export default MissionCard;

MissionCard.propTypes = {

};
