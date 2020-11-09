import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Opening from '@C/apply/opening';
import ApplyLink from '@C/apply/ApplyLink';
import PeopleForSnuFestival from '@C/apply/PeopleForSnuFestival';
import PeopleForActivity from '@C/apply/teams/PeopleForActivity';
import PeopleForPerformance from '@C/apply/teams/PeopleForPerformance';
import PeopleForDesign from '@C/apply/teams/PeopleForDesign';
import PeopleForPromotion from '@C/apply/teams/PeopleForPromotion';

function Apply() {
  return (
    <S.StyledApply>
      <Opening />
      <ApplyLink />
      <PeopleForSnuFestival />
      <S.Teams>
        <PeopleForPerformance />
        <PeopleForDesign />
        <PeopleForActivity />
        <PeopleForPromotion />
      </S.Teams>
    </S.StyledApply>
  );
}
export default Apply;

Apply.propTypes = {

};
