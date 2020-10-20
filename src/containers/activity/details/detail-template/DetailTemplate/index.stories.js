import React from 'react';
import IU5 from '@I/jpeg/IU5.jpeg';
import DetailTemplate from './index';

export default {
  title: 'containers/activity/details/detail-template/DetailTemplate',
};

const images = [IU5, IU5, IU5, IU5, IU5, IU5, IU5, IU5, IU5];

export const Default = () => (
  <DetailTemplate
    title="단체게임"
    description="단체게임 설명"
    images={images}
  />
);
