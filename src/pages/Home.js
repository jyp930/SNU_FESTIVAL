import React from 'react';
import HomeContainer from '@C/home/Home';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import { theme } from '@S/index';

function Home() {
  return (
    <>
      <Header hamburgerColor={theme.palette.PURPLE50} />
      <HomeContainer />
    </>
  );
}
export default withMountEvent(Home);
