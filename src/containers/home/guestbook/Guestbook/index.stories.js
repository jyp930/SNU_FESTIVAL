import React from 'react';
import { StyledContainer } from '@F/Toast/styles';
import Guestbook from './index';

export default {
  title: 'containers/home/guestbook/Guestbook',
};

export const Default = () => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <StyledContainer
      position="top-center"
      autoClose={3000}
      pauseOnHover={false}
      newestOnTop
    />
    <Guestbook />
  </div>
);
