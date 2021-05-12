import React from 'react';
import PhoneCertContainer from '@C/performance/PhoneCert';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';

function PhoneCert() {
  return (
    <>
      <Header />
      <PhoneCertContainer />
    </>
  );
}
export default withMountEvent(PhoneCert);
