import React from 'react';
import { theme } from '@S/index';
import GameTournament from './index';

export default {
  title: 'containers/performance/GameTournament',
};

export const Default = () => (
  <GameTournament theme={{ windowWidth: 1000, ...theme }} />
);
