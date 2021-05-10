import React from 'react';
import Header from '@F/layout/Header';
import withMountEvent from '@U/hoc/withMountEvent';
import GroupContainer from '@C/activity/group/Group';

function Group() {
  return (
    <>
      <Header />
      <GroupContainer />
    </>
  );
}
export default withMountEvent(Group);
