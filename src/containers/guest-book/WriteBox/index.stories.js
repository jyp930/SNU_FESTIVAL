import React from 'react';
import { StyledContainer } from '@F/Toast/styles';
import WriteBox from './index';

export default {
  title: 'containers/guest-book/comment/WriteBox',
};

export const Default = () => (
  <div>
    <StyledContainer
      position="top-center"
      autoClose={2000}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
    />
    <WriteBox />
  </div>
);
