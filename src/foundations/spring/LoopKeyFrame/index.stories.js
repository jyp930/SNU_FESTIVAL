import React from 'react';
import LoopKeyFrame from './index';

export default {
  title: 'foundations/spring/LoopKeyFrame',
};

export const Default = () => (
  <LoopKeyFrame
    start={{ opacity: 0 }}
    end={{ opacity: 1 }}
    duration={500}
  >
    <span>Hello</span>
  </LoopKeyFrame>
);
