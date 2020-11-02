import React from 'react';
import IU6 from '@I/jpeg/IU6.jpeg';
import BasicCard from './index';

export default {
  title: 'foundations/card/BasicCard',
};

export const Default = () => (
  <div style={{ width: 350, height: 500 }}>
    <BasicCard
      image={IU6}
      content={<div>테스트입니다</div>}
    />
  </div>
);
