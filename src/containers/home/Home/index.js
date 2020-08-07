import React, { useState } from 'react';
import Section1 from '@/containers/home/Section1';
import Section2 from '@/containers/home/Section2';
import Section3 from '@/containers/home/Section3';
import * as S from './styles';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

function Home() {
  const [parallax, setParallax] = useState();

  return (
    <S.Parallax ref={ref => setParallax(ref)} pages={3}>
      <Section1 parallax={parallax} url={url} />
      <Section2 parallax={parallax} url={url} />
      <Section3 parallax={parallax} url={url} />
    </S.Parallax>
  );
}
export default Home;

Home.propTypes = {

};
