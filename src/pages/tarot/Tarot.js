import React from 'react';
import TarotContainer from '@C/tarot/Tarot';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';

function Tarot() {
  return (
    <>
      <Header />
      <TarotContainer />
    </>
  );
}
export default withMountEvent(Tarot);
