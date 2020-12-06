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
        '늘 새로운 시도를 하는 행사팀!',
        '대면축제든 비대면축제든 행사팀에 지원해보세요.',
        '행사에 더욱 애정을 가질 수 있답니다!',
        '< 20 가을 행팀장 나예선 >',
      ]}
    />
  );
}
export default PeopleForActivity;

PeopleForActivity.propTypes = {

};
