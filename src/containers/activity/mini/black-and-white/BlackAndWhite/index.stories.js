import React from 'react';
import { BlackAndWhite } from './index';

export default {
  title: 'containers/activity/mini/black-and-white/BlackAndWhite',
};

export const Default = () => (
  <BlackAndWhite
    user={{ uid: 'test', isLoading: false, email: 'test@snu.ac.kr' }}
    isAuthorized
  />
);
