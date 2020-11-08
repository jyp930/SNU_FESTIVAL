import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function TeamTemplate() {
  return (
    <S.StyledTeamTemplate>
      <S.Name>공연팀</S.Name>
      <S.Core>가보지 않은 길을 두려워 하지 않습니다.</S.Core>
    </S.StyledTeamTemplate>
  );
}
export default TeamTemplate;

TeamTemplate.propTypes = {

};
