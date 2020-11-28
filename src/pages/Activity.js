import React from 'react';
import ActivityContainer from '@C/activity/Activity';
import withMountEvent from '@U/hoc/withMountEvent';

function Activity() {
  return (
    <div style={{ marginTop: 60 }}>
      <ActivityContainer />
    </div>
  );
}
export default withMountEvent(Activity);
