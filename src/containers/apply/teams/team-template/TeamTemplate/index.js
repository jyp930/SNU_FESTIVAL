import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function TeamTemplate({ name, core, backgroundColor }) {
  return (
    <S.StyledTeamTemplate
      backgroundColor={backgroundColor}
    >
      <S.Name>{ name }</S.Name>
      <S.Core>{ core }</S.Core>
    </S.StyledTeamTemplate>
  );
}
export default TeamTemplate;

TeamTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  core: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
