import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import TeamTemplate from '@C/apply/teams/team-template/TeamTemplate';
import { palette } from '@S/index';

function PeopleForActivity() {
  return (
    <TeamTemplate
      name="행사팀"
      core="우리는 하이브리드 샘이솟아 리오레이비입니다."
      backgroundColor={palette.YELLOW20_PASTEL}
      peopleTexts={[
        '#아이디어천재',
        '#아무말대잔치',
        '#노는게제일좋아',
      ]}
      workTexts={[
        '게임 기획 및 제작',
        '공모전 기획 및 담당',
        '보이는 라디오',
      ]}
      wordTexts={[
        '행사 준비를 통해 축제에 애정이 넘치게 되었습니다.',
        '비록 온라인으로 바뀌었지만 둘 다 큰 의미가 있으니',
        '모두 행팀 지원 부탁드려요!',
      ]}
    />
  );
}
export default PeopleForActivity;

PeopleForActivity.propTypes = {

};
