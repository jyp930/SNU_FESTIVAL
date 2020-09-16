import React, { useCallback, useState } from 'react';
import PromoteVideo from '@C/home/PromoteVideo';
import * as S from './styles';

function Home() {
  const [parallax, setParallax] = useState();
  const totalPages = 1;

  const scrollDown = useCallback((offset) => {
    const nextOffset = (offset === totalPages - 1) ? 0 : offset + 1;
    parallax.scrollTo(nextOffset);
  }, [parallax]);

  return (
    <S.Parallax ref={ref => setParallax(ref)} pages={totalPages}>
      <PromoteVideo offset={0} scrollDown={scrollDown} />
    </S.Parallax>
  );
}
export default Home;

Home.propTypes = {

};
