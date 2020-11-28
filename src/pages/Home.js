import React from 'react';
import HomeContainer from '@C/home/Home';
import Footer from '@F/Footer';
import withMountEvent from '@U/hoc/withMountEvent';

function Home() {
  return (
    <>
      <HomeContainer />
      <Footer />
    </>
  );
}
export default withMountEvent(Home);
