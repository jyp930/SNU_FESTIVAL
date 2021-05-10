import React from 'react';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import SingStealerContainer from '@C/performance/SingStealer';

function SingStealer() {
  return (
    <>
      <Header />
      <SingStealerContainer />
    </>
  );
}
export default withMountEvent(SingStealer);
