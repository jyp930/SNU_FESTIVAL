import React from 'react';
import PromoteVideo from '@C/home/PromoteVideo';
import * as S from './styles';

function Home() {
  return (
    <S.StyledHome>
      <S.FullWrapper>
        <PromoteVideo />
      </S.FullWrapper>
    </S.StyledHome>
  );
}
export default Home;

Home.propTypes = {

};
