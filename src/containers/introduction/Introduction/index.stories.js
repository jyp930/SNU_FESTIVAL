import React from 'react';
import { theme } from '@S/index';
import Introduction from './index';

export default {
  title: 'containers/introduction/Introduction',
};

export const Default = () => <Introduction theme={{ windowWidth: 1000, windowHeight: 1000, ...theme }} />;
