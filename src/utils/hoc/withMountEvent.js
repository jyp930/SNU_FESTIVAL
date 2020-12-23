import React, { useEffect } from 'react';
import { removeTrails, triggerMouseTrail } from '@F/animation/MouseTrail';

function withMountEvent(InputComponent) {
  return function ResultComponent(props) {
    useEffect(() => {
      // 스크롤 최상단으로
      window.scrollTo(0, 0);

      // 마우스 초기화
      removeTrails();
      triggerMouseTrail();
    }, []);

    return <InputComponent {...props} />;
  };
}
export default withMountEvent;
