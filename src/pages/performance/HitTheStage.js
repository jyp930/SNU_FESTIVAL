import React from 'react';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import HitTheStageContainer from '@C/performance/HitTheStage';

function HitTheStage() {
  return (
    <>
      <Header />
      <HitTheStageContainer />
    </>
  );
}
// TODO: withMountEvent app에 연결
export default withMountEvent(HitTheStage);
