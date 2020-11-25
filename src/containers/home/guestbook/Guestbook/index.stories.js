import React, { useState } from 'react';
import { Parallax } from 'react-spring/renderprops-addons';
import * as S from '@C/home/Home/styles';
import Guestbook from './index';

export default {
  title: 'containers/home/guestbook/Guestbook',
};

export const Default = () => {
  const [parallax, setParallax] = useState(null);

  return (
    <Parallax ref={ref => setParallax(ref)} pages={1} style={{ top: 0, left: 0 }}>
      <S.StyledContainer
        position="top-center"
        autoClose={3000}
        pauseOnHover={false}
        newestOnTop
      />
      <Guestbook parallax={parallax} offset={0} />
    </Parallax>
  );
};
