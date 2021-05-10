import React from 'react';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import RadioContainer from '@C/activity/radio/Radio';

function Radio() {
  return (
    <>
      <Header />
      <RadioContainer />
    </>
  );
}
export default withMountEvent(Radio);
