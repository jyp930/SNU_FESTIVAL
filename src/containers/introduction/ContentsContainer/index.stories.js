import React from 'react';
import ContentsContainer from './index';

export default {
  title: 'containers/introduction/ContentsContainer',
};

export const Default = () => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <ContentsContainer
      name="이름"
      description="설명"
      background="linear-gradient(to top, #a8edea 0%, #fed6e3 100%)"
      active
    />
  </div>
);
