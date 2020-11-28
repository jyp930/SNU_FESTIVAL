import React from 'react';
import PerformanceContainer from '@C/performance/Performance';
import withMountEvent from '@U/hoc/withMountEvent';

function Performance() {
  return (
    <div style={{ marginTop: 60 }}>
      <PerformanceContainer />
    </div>
  );
}
export default withMountEvent(Performance);
