import React, { useEffect } from 'react';
import TreasureHuntContainer from '@C/activity/mini/treasure-hunt/TreasureHunt';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import Treasure from '@I/activity/treasure-hunt/treasure.png';
import Celebration from '@I/activity/group/celebration.png';
import { preloadImage } from '@U/functions/preload';

function TreasureHunt() {
  useEffect(() => {
    [Treasure, Celebration].forEach(preloadImage);
  }, []);

  return (
    <>
      <Header />
      <TreasureHuntContainer />
    </>
  );
}
export default withMountEvent(TreasureHunt);
