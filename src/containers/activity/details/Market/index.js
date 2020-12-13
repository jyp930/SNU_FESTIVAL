import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import DetailTemplate from '@C/activity/details/detail-template/DetailTemplate';
import Market1 from '@I/activity/market/market1.jpeg';
import Market2 from '@I/activity/market/market2.jpeg';
import Market3 from '@I/activity/market/market3.jpeg';
import Market4 from '@I/activity/market/market4.jpeg';
import Market5 from '@I/activity/market/market5.png';
import Market6 from '@I/activity/market/market6.png';
import Market7 from '@I/activity/market/market7.jpeg';
import Market8 from '@I/activity/market/market8.png';
import Market9 from '@I/activity/market/market9.png';
import Market10 from '@I/activity/market/market10.png';

const items = [
  { image: Market3, description: '3번 설명' },
  { image: Market2, description: '2번 설명' },
  { image: Market1, description: '1번 설명' },
  { image: Market4, description: '4번 설명' },
  { image: Market5, description: '5번 설명' },
  { image: Market6, description: '6번 설명' },
  { image: Market7, description: '7번 설명' },
  { image: Market8, description: '8번 설명' },
  { image: Market9, description: '9번 설명' },
  { image: Market10, description: '10번 설명' },
];

function Market() {
  return (
    <DetailTemplate
      title="공모전/장터"
      description="꿈이 현실이 되는 공간! 맛있는 음식과 다양한 물건이 가득한 잔디"
      items={items}
    />
  );
}
export default Market;

Market.propTypes = {

};
