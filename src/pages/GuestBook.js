import React from 'react';
import withMountEvent from '@U/hoc/withMountEvent';
import GuestBookContainer from '@C/guest-book/GuestBook';
import Header from '@F/layout/Header';

function GuestBook() {
  return (
    <>
      <Header />
      <GuestBookContainer />
    </>
  );
}
export default withMountEvent(GuestBook);
