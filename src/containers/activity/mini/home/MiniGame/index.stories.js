import React from 'react';
import MiniGame from './index';

export default {
  title: 'containers/activity/mini/home/MiniGame',
};

export const Default = () => (
  <MiniGame
    user={{
      uid: 'test',
      isLoading: false,
    }}
    isAuthorized
  />
);
