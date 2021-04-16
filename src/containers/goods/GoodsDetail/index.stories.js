import React from 'react';
import Window from '@I/goods/window.png';
import GoodsDetail from './index';

export default {
  title: 'containers/goods/GoodsDetail',
};

export const Default = () => (
  <GoodsDetail
    formUrl="https://naver.com"
    information={{ name: '이름', price: 12000, description: '설명' }}
    image={Window}
    longImage={Window}
  />
);
