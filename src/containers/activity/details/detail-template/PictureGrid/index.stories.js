import React from 'react';
import IU1 from '@I/jpeg/IU1.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import PictureGrid from './index';

export default {
  title: 'containers/activity/details/detail-template/PictureGrid',
};

const items = [
  { image: IU1, description: '1번 설명' },
  { image: IU2, description: '2번 설명' },
];

export const Default = () => (
  <PictureGrid
    items={items}
    onClickItem={() => {}}
  />
);
