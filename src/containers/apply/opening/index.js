import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import ClosingFestival from '@I/jpg/closing-festival.jpg';

function Opening() {
  return (
    <S.StyledMain>
      <S.BackgroundImage
        src={ClosingFestival}
        alt="폐막제"
      />
      <S.ApplyLinkBox>
        <S.EnglishText>JOIN US</S.EnglishText>
        <S.KoreanText>뭔가 꽤 멋진 문구 멋짐이 모자라지도 그렇다고 넘치지도 않은 상태</S.KoreanText>
      </S.ApplyLinkBox>
    </S.StyledMain>
  );
}
export default Opening;

Opening.propTypes = {

};
