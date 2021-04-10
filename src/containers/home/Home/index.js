import React from 'react';
import { HeaderContent } from '@F/layout/Header';
import * as S from './styles';

function Home() {
  return (
    <S.StyledHome>
      <HeaderContent
        backgroundColor="white"
        hasBoxShadow
      >
        <S.Title>
          <p>서울대학교 2021 봄축제</p>
          <p>페스월드</p>
        </S.Title>
      </HeaderContent>
      <S.Body>
        <p>2021 SNU FESTIVAL</p>
        <p>5월 11일에 새로운 모습으로 찾아뵙겠습니다</p>
      </S.Body>
    </S.StyledHome>
  );
}
export default Home;

Home.propTypes = {

};
