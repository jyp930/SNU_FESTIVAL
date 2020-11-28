import React from 'react';
import * as S from '@C/home/Home/styles';
import Guestbook from './index';

export default {
  title: 'containers/home/guestbook/Guestbook',
};

export const Default = () => {

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <S.StyledContainer
        position="top-center"
        autoClose={3000}
        pauseOnHover={false}
        newestOnTop
      />
      <Guestbook />
    </div>
  );
};
