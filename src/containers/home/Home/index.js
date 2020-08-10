import React, { useState } from 'react';
import PromoteVideo from '@C/home/PromoteVideo';
import NewtroCompetitionImage from '@C/home/NewtroCompetitionImage';
import Section2 from '@C/home/Section2';
import * as S from './styles';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

function Home() {
  const [parallax, setParallax] = useState();

  return (
    <S.Parallax ref={ref => setParallax(ref)} pages={5}>
      <PromoteVideo parallax={parallax} offset={0} />
      <Section2 parallax={parallax} url={url} />
      <PromoteVideo parallax={parallax} offset={2} />
      <PromoteVideo parallax={parallax} offset={3} />
      <NewtroCompetitionImage parallax={parallax} offset={4} />
    </S.Parallax>
  );
}
export default Home;

Home.propTypes = {

};
