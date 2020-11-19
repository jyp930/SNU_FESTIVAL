import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import TeamTemplate from '@C/apply/teams/team-template/TeamTemplate';
import { palette } from '@S/index';

function PeopleForActivity() {
  return (
    <TeamTemplate
      name="행사팀"
      core="가보지 않은 길을 두려워 하지 않습니다."
      backgroundColor={palette.YELLOW20_PASTEL}
    />
  );
}
export default PeopleForActivity;

PeopleForActivity.propTypes = {

};
