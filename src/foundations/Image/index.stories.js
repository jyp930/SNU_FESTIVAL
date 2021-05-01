import React from 'react';
import IU1 from '@I/jpeg/IU1.jpeg';
import Image from './index';

export default {
  title: 'foundations/Image',
};

export const Default = () => (
  <div style={{ width: 500, height: 500 }}>
    <Image
      src={IU1}
      alt="TEST"
    />
  </div>
);
