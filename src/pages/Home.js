import React from 'react';
import HomeContainer from '@C/home/Home';
import Footer from '@F/layout/Footer';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import { theme } from '@S/index';

function Home() {
  return (
    <>
      <Header hamburgerColor={theme.palette.PURPLE50} />
      <HomeContainer />
      <Footer />
    </>
  );
}
export default withMountEvent(Home);
