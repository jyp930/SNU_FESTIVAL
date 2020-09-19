import React from 'react';
import TypingTextTransition from './index';

export default {
  title: 'foundations/textAnimation/TypingTextTransition',
};

export const Default = () => (
  <div style={{ height: 400, width: 400 }}>
    <TypingTextTransition text="지금은 기간이 아닙니다!" />
  </div>
);
