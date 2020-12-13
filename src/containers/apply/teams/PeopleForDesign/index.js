import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import TeamTemplate from '@C/apply/teams/team-template/TeamTemplate';
import { palette } from '@S/index';

function PeopleForDesign() {
  return (
    <TeamTemplate
      name="디자인팀"
      core="우리는 일단 저장하고 봅니다."
      backgroundColor={palette.GREEN_PASTEL}
      peopleTexts={[
        '#금손',
        '#포스터장인',
        '#이게_진짜_마지막_최종_수정_완성본.psd',
      ]}
      workTexts={[
        '온갖 포스터제작',
        '온갖 현수막제작',
        '축하사 굿즈제작',
      ]}
      wordTexts={[
        '디자인팀은 눈이 즐거운 디자인 작업물을 만들기 위해 열심히 노력합니다.',
        '축제의 콘셉트를 시각화하는 일을 담당하고 있습니다.',
        '앞으로의 디자인팀도 응원합니다!',
        '< 20 가을 디팀장 권은서 >',
        '',
        '모두가 몇날며칠 구상한 축제를 눈으로 볼 수 있게 만든다는 것.',
        '모호한 것이 뚜렷해지는 순간들. 생각만 해도 설레지 않나요?',
        '함께 축제의 분위기를 디자인해봅시다!',
        '< 20 봄 디팀장 김혜민>',
      ]}
    />
  );
}
export default PeopleForDesign;

PeopleForDesign.propTypes = {

};
