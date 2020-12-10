import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import DetailTemplate from '@C/activity/details/detail-template/DetailTemplate';
import MiniGame1 from '@I/activity/miniGame/miniGame1.jpeg';
import MiniGame2 from '@I/activity/miniGame/miniGame2.jpeg';
import MiniGame3 from '@I/activity/miniGame/miniGame3.jpeg';
import MiniGame4 from '@I/activity/miniGame/miniGame4.jpeg';
import MiniGame5 from '@I/activity/miniGame/miniGame5.png';
import MiniGame6 from '@I/activity/miniGame/miniGame6.png';
import MiniGame7 from '@I/activity/miniGame/miniGame7.png';
import MiniGame8 from '@I/activity/miniGame/miniGame8.jpeg';
import MiniGame9 from '@I/activity/miniGame/miniGame9.jpeg';
import MiniGame10 from '@I/activity/miniGame/miniGame10.jpeg';

const items = [
  { image: MiniGame1, description: '1번 설명' },
  { image: MiniGame2, description: '2번 설명' },
  { image: MiniGame3, description: '3번 설명' },
  { image: MiniGame4, description: '4번 설명' },
  { image: MiniGame5, description: '5번 설명' },
  { image: MiniGame6, description: '6번 설명' },
  { image: MiniGame7, description: '7번 설명' },
  { image: MiniGame8, description: '8번 설명' },
  { image: MiniGame9, description: '9번 설명' },
  { image: MiniGame10, description: '10번 설명' },
];

function MiniGame() {
  return (
    <DetailTemplate
      title="미니게임"
      description="소확행은 이곳에서! 누구나 참여할 수 있는 쉽고 재미있는 미니게임"
      items={items}
    />
  );
}
export default MiniGame;

MiniGame.propTypes = {

};
