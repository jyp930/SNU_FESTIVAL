import React from 'react';
import IntroductionContainer from '@/containers/introduction/Introduction';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import ScrollTopButton from '@F/layout/ScrollTopButton';

function Introduction() {
  return (
    <>
      <Header />
      <IntroductionContainer />
      <ScrollTopButton />
    </>
  );
}
export default withMountEvent(Introduction);
