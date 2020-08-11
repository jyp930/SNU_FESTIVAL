import React, { useState } from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import NewtroCompetitionImage from './index';

export default {
  title: 'containers/home/NewtroCompetitionImage',
};

export const Default = () => {
  const [parallax, setParallax] = useState(null);

  return (
    <Parallax ref={ref => setParallax(ref)} pages={1} style={{ top: 0, left: 0 }}>
      <NewtroCompetitionImage parallax={parallax} offset={0} />
    </Parallax>
  );
};