import React from 'react';
import { HeaderContent } from '@F/layout/Header';
import * as S from './styles';

function Title() {
  return (
    <HeaderContent
      backgroundColor="transparent"
      fixed
    >
      <S.Title>
        <p>서울대학교 2021 봄축제</p>
        <p>페스월드</p>
      </S.Title>
    </HeaderContent>
  );
}
export default Title;

Title.propTypes = {

};
