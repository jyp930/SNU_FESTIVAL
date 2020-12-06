import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import TeamTemplate from '@C/apply/teams/team-template/TeamTemplate';
import { palette } from '@S/index';

function PeopleForPerformance() {
  return (
    <TeamTemplate
      name="공연팀"
      core="우리는 축제의 시작과 끝입니다."
      backgroundColor={palette.BLUE_PASTEL}
      peopleTexts={[
        '#만능엔터테이너',
        '#리허설부터_엔딩까지',
        '#업무능력자',
      ]}
      workTexts={[
        '프리페스 담당',
        '공연 기획 및 모집',
        '동아리 콜라보 공연 기획',
      ]}
      wordTexts={[
        '공연 기획에 참여하고 싶은 사람!',
        '열정을 가지고 축제에 참여할 사람!',
        '축제하는 사람들과 친해질 사람!',
        '공연팀 프리패스!',
        '< 20 가을 공팀장 신민규 >',
        '',
        '솔직히 공연팀 없으면 축제는 없다고 해도 과언이 아니죠~',
        '< 20 봄 공팀장 김재희 >',
      ]}
    />
  );
}
export default PeopleForPerformance;

PeopleForPerformance.propTypes = {

};
