import React from 'react';
import * as S from '@C/home/Home/styles';
import WriteBox from './index';

export default {
  title: 'containers/home/guestbook/WriteBox',
};

export const Default = () => (
  <div>
    <S.StyledContainer
      position="top-center"
      autoClose={2000}
      pauseOnHover={false}
      pauseOnFocusLoss={false}
    />
    <WriteBox />
  </div>
);
