import React from 'react';
import IntroductionContainer from '@/containers/introduction/Introduction';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import TopButton from '@F/layout/TopButton';

function Introduction() {
  return (
    <>
      <Header />
      <IntroductionContainer />
      <TopButton />
    </>
  );
}
export default withMountEvent(Introduction);
