import React, { useState } from 'react';
import PromoteVideo from '@C/home/PromoteVideo';
import NewtroCompetitionImage from '@C/home/NewtroCompetitionImage';
import * as S from './styles';

function Home() {
  const [parallax, setParallax] = useState();

  return (
    <S.Parallax ref={ref => setParallax(ref)} pages={5}>
      <PromoteVideo parallax={parallax} offset={0} />
      <PromoteVideo parallax={parallax} offset={1} />
      <PromoteVideo parallax={parallax} offset={2} />
      <PromoteVideo parallax={parallax} offset={3} />
      <NewtroCompetitionImage parallax={parallax} offset={4} />
    </S.Parallax>
  );
}
export default Home;

Home.propTypes = {

};
