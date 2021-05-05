import React, { useEffect } from 'react';
import withMountEvent from '@U/hoc/withMountEvent';
import GuestBookContainer from '@C/guest-book/GuestBook';
import Header from '@F/layout/Header';
import mascot1 from '@I/svg/mascot/1.svg';
import mascot2 from '@I/svg/mascot/2.svg';
import mascot3 from '@I/svg/mascot/3.svg';
import mascot4 from '@I/svg/mascot/4.svg';
import mascot5 from '@I/svg/mascot/5.svg';
import mascot10 from '@I/svg/mascot/10.svg';
import mascot11 from '@I/svg/mascot/11.svg';
import mascot12 from '@I/svg/mascot/12.svg';
import mascot13 from '@I/svg/mascot/13.svg';
import mascot14 from '@I/svg/mascot/14.svg';
import { preloadImage } from '@U/functions/preload';

const mascots = [
  mascot1, mascot2, mascot3, mascot4, mascot5, mascot10, mascot11, mascot12, mascot13, mascot14,
];

function GuestBook() {
  useEffect(() => {
    mascots.forEach(preloadImage);
  }, []);

  return (
    <>
      <Header />
      <GuestBookContainer />
    </>
  );
}
export default withMountEvent(GuestBook);
