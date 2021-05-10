import React from 'react';
import RiddleContainer from '@C/activity/mini/riddle/Riddle';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import { theme } from '@S/index';

function Riddle() {
  return (
    <>
      <Header hamburgerColor={theme.palette.PURPLE50} />
      <RiddleContainer />
    </>
  );
}
export default withMountEvent(Riddle);
