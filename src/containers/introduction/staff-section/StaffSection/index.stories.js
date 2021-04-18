import React from 'react';
import { theme } from '@S/index';
import StaffSection from './index';

export default {
  title: 'containers/introduction/staff-section/StaffSection',
};

export const Default = () => <StaffSection isMobile={false} theme={{ windowWidth: 1000, ...theme }} />;
