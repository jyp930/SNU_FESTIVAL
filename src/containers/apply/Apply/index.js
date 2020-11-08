import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Opening from '@C/apply/opening';
import ApplyLink from '@C/apply/ApplyLink';
import PeopleForSnuFestival from '@C/apply/PeopleForSnuFestival';
import TeamTemplate from '@C/apply/teams/team-template/TeamTemplate';

function Apply() {
  return (
    <S.StyledApply>
      <Opening />
      <ApplyLink />
      <PeopleForSnuFestival />
      <S.Teams>
        <TeamTemplate />
        <TeamTemplate />
        <TeamTemplate />
        <TeamTemplate />
      </S.Teams>
    </S.StyledApply>
  );
}
export default Apply;

Apply.propTypes = {

};
