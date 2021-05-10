import React from 'react';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import GameTournamentContainer from '@C/performance/GameTournament';

function GameTournament() {
  return (
    <>
      <Header />
      <GameTournamentContainer />
    </>
  );
}
export default withMountEvent(GameTournament);
