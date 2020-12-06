import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import ClosingFestival from '@I/jpg/closing-festival.jpg';
import Slide from 'react-reveal/Slide';

function Opening() {
  return (
    <S.StyledMain>
      <S.BackgroundImage
        src={ClosingFestival}
        alt="폐막제"
      />
      <S.ApplyLinkBox>
        <Slide left cascade duration={500}>
          <S.EnglishText>JOIN US</S.EnglishText>
          <S.KoreanText>
            사람을 움직이는 힘
            <br />
            그것은 바로 열정입니다.
          </S.KoreanText>
        </Slide>
      </S.ApplyLinkBox>
    </S.StyledMain>
  );
}
export default Opening;

Opening.propTypes = {

};
