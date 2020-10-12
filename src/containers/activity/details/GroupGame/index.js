import React from 'react';
import PropTypes from 'prop-types';
import DetailTemplate from '@C/activity/details/DetailTemplate';
import * as S from './styles';

function GroupGame() {
  return (
    <DetailTemplate
      title="단체게임"
      description="4~5명의 학우가 한 팀이 되어 3가지 게임에서 살아남는 서바이벌!"
    >
      GroupGamed
    </DetailTemplate>
  );
}
export default GroupGame;

GroupGame.propTypes = {

};
