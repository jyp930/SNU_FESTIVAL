import React from 'react';
import { theme } from '@S/index';
import Bubble from './index';

export default {
  title: 'containers/introduction/staff-section/Bubble',
};

export const Default = () => <Bubble theme={{ windowWidth: 1000, ...theme }} />;
