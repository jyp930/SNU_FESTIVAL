import React from 'react';
import IU1 from '@I/jpeg/IU1.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import IU3 from '@I/jpeg/IU3.jpeg';
import IU6 from '@I/jpeg/IU6.jpeg';
import IU7 from '@I/jpeg/IU7.jpeg';
import ImageSlider from './index';

export default {
  title: 'foundations/spring/ImageSlider',
};

export const Default = () => (
  <div style={{ width: '100%', height: '70vh' }}>
    <ImageSlider
      images={[IU1, IU4, IU5, IU2, IU3, IU6, IU7]}
    />
  </div>
);
