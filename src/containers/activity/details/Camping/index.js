import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import DetailTemplate from '@C/activity/details/detail-template/DetailTemplate';
import Camping1 from '@I/activity/camping/camping1.jpeg';
import Camping2 from '@I/activity/camping/camping2.jpeg';
import Camping3 from '@I/activity/camping/camping3.png';
import Camping4 from '@I/activity/camping/camping4.jpeg';
import Camping5 from '@I/activity/camping/camping5.jpeg';
import Camping6 from '@I/activity/camping/camping6.jpeg';

const items = [
  { image: Camping5, description: '1번 설명' },
  { image: Camping2, description: '2번 설명' },
  { image: Camping3, description: '3번 설명' },
  { image: Camping4, description: '4번 설명' },
  { image: Camping1, description: '5번 설명' },
  { image: Camping6, description: '6번 설명' },
];

function Camping() {
  return (
    <DetailTemplate
      title="캠핑/심야게임"
      description="친구들과 음악과 텐트라면.. 금잔디가 부럽지 않은 학생잔디"
      items={items}
    />
  );
}
export default Camping;

Camping.propTypes = {

};
