import React from 'react';
import IU5 from '@I/jpeg/IU5.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU1 from '@I/jpeg/IU1.jpeg';
import PictureGrid from './index';

export default {
  title: 'containers/activity/details/detail-template/PictureGrid',
};

const images = [IU5, IU4, IU1];

export const Default = () => (
  <PictureGrid
    images={images}
    onClickImage={() => {}}
  />
);
