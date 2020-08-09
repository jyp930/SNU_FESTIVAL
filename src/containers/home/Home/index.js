import React, { useState } from 'react';
import PromoteVideo from '@/containers/home/PromoteVideo';
import Section2 from '@/containers/home/Section2';
import Section3 from '@/containers/home/Section3';
import * as S from './styles';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

function Home() {
  const [parallax, setParallax] = useState();

  return (
    <S.Parallax ref={ref => setParallax(ref)} pages={3}>
      <PromoteVideo parallax={parallax} offset={0} />
      <Section2 parallax={parallax} url={url} />
      <Section3 parallax={parallax} url={url} />
    </S.Parallax>
  );
}
export default Home;

Home.propTypes = {

};
