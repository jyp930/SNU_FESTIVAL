import React, { useCallback, useState } from 'react';
import PromoteVideo from '@C/home/PromoteVideo';
import Guestbook from '@C/home/guestbook/Guestbook';
import * as S from './styles';

function Home() {
  const [parallax, setParallax] = useState();
  const totalPages = 2;

  const scrollDown = useCallback((offset) => {
    const nextOffset = (offset === totalPages - 1) ? 0 : offset + 1;
    parallax.scrollTo(nextOffset);
  }, [parallax]);

  return (
    <S.StyledHome>
      <S.StyledContainer
        position="top-right"
        hideProgressBar
        autoClose={3000}
        pauseOnHover={false}
        newestOnTop
      />
      <S.Parallax ref={ref => setParallax(ref)} pages={totalPages}>
        <PromoteVideo offset={0} scrollDown={scrollDown} />
        <Guestbook offset={1} scrollDown={scrollDown} />
      </S.Parallax>
    </S.StyledHome>
  );
}
export default Home;

Home.propTypes = {

};
