import React from 'react';
import IntroductionContainer from '@/containers/introduction/Introduction';
import withMountEvent from '@U/hoc/withMountEvent';

function Introduction() {
  return (
    <IntroductionContainer />
  );
}
export default withMountEvent(Introduction);
