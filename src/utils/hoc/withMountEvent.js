import React, { useEffect } from 'react';

function withMountEvent(InputComponent) {
  return function ResultComponent(props) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return <InputComponent {...props} />;
  };
}
export default withMountEvent;
