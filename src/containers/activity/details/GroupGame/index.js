import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import DetailTemplate from '@C/activity/details/detail-template/DetailTemplate';
import GroupGame1 from '@I/activity/groupGame/groupGame1.jpeg';
import GroupGame2 from '@I/activity/groupGame/groupGame2.jpeg';
import GroupGame3 from '@I/activity/groupGame/groupGame3.jpeg';
import GroupGame4 from '@I/activity/groupGame/groupGame4.jpeg';
import GroupGame5 from '@I/activity/groupGame/groupGame5.jpeg';
import GroupGame6 from '@I/activity/groupGame/groupGame6.jpeg';
import GroupGame7 from '@I/activity/groupGame/groupGame7.jpeg';
import GroupGame8 from '@I/activity/groupGame/groupGame8.jpeg';
import GroupGame9 from '@I/activity/groupGame/groupGame9.jpeg';
import GroupGame10 from '@I/activity/groupGame/groupGame10.jpeg';

const items = [
  { image: GroupGame3, description: '3번 설명' },
  { image: GroupGame2, description: '2번 설명' },
  { image: GroupGame1, description: '1번 설명' },
  { image: GroupGame10, description: '10번 설명' },
  { image: GroupGame5, description: '5번 설명' },
  { image: GroupGame6, description: '6번 설명' },
  { image: GroupGame7, description: '7번 설명' },
  { image: GroupGame8, description: '8번 설명' },
  { image: GroupGame9, description: '9번 설명' },
  { image: GroupGame4, description: '4번 설명' },
];

function GroupGame() {
  return (
    <DetailTemplate
      title="단체게임"
      description="우당탕탕 상금 사수 대작전! 친구들과 함께하는 축제의 피날레"
      items={items}
    />
  );
}
export default GroupGame;

GroupGame.propTypes = {

};
