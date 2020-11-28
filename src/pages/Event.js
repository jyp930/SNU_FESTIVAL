import React from 'react';
import EventContainer from '@C/event/Event';
import withMountEvent from '@U/hoc/withMountEvent';

function Event() {
  return (
    <EventContainer />
  );
}
export default withMountEvent(Event);
