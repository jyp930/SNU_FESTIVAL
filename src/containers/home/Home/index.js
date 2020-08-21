import React, { useCallback, useState } from 'react';
import PromoteVideo from '@C/home/PromoteVideo';
import FullMap from '@C/home/FullMap';
import NewtroCompetitionImage from '@C/home/NewtroCompetitionImage';
import * as S from './styles';

function Home() {
  const [parallax, setParallax] = useState();
  const totalPages = 5;

  const scrollDown = useCallback((offset) => {
    const nextOffset = (offset === totalPages - 1) ? 0 : offset + 1;
    parallax.scrollTo(nextOffset);
  }, [parallax]);

  return (
    <S.Parallax ref={ref => setParallax(ref)} pages={totalPages}>
      <PromoteVideo offset={0} scrollDown={scrollDown} />
      <PromoteVideo offset={1} scrollDown={scrollDown} />
      <PromoteVideo offset={2} scrollDown={scrollDown} />
      <FullMap offset={3} />
      <NewtroCompetitionImage offset={4} scrollDown={scrollDown} />
    </S.Parallax>
  );
}
export default Home;

Home.propTypes = {

};
