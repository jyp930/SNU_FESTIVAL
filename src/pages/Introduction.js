import React from 'react';
import IntroductionContainer from '@/containers/introduction/Introduction';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';

function Introduction() {
  return (
    <>
      <Header />
      <IntroductionContainer />
    </>
  );
}
export default withMountEvent(Introduction);
