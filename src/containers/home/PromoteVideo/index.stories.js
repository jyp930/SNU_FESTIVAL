import React, { useState } from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import PromoteVideo from './index';

export default {
  title: 'containers/home/PromoteVideo',
};

export const Default = () => {
  const [parallax, setParallax] = useState(null);

  return (
    <Parallax ref={ref => setParallax(ref)} pages={1} style={{ top: 0, left: 0 }}>
      <PromoteVideo parallax={parallax} offset={0} />
    </Parallax>
  );
};
