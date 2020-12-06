import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import TeamTemplate from '@C/apply/teams/team-template/TeamTemplate';
import { palette } from '@S/index';

function PeopleForPromotion() {
  return (
    <TeamTemplate
      name="홍보팀"
      core="우리는 오늘만 삽니다."
      backgroundColor="mediumpurple"
      peopleTexts={[
        '#동원참치_100회독',
        '#SNS마스터',
        '#마케팅귀재',
      ]}
      workTexts={[
        '홍보영상 제작',
        'SNS 홍보 담당',
        '이벤트 기획',
      ]}
      wordTexts={[
        '매년 홍팀은 레전드를 썼습니다.',
        '그게 일이든 술이든.',
        '이어가주시길 바랍니다.',
        '< 20 가을 홍팀장 최한비 >',
      ]}
    />
  );
}
export default PeopleForPromotion;

PeopleForPromotion.propTypes = {

};
