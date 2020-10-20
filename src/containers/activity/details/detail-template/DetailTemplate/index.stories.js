import React from 'react';
import DetailTemplate from './index';
import IU1 from '@I/jpeg/IU1.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';

export default {
  title: 'containers/activity/details/detail-template/DetailTemplate',
};

const items = [
  { image: IU1, description: '1번 설명' },
  { image: IU2, description: '2번 설명' },
];

export const Default = () => (
  <DetailTemplate
    title="단체게임"
    description="단체게임 설명"
    items={items}
  />
);
