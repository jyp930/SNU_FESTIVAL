import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function TextSection() {
  return (
    <S.StyledTextSection>
      <S.Title>
        <S.PurpleText>축하사</S.PurpleText>
        <br />
        <span>공식</span>
        {' '}
        <S.PurpleText>굿-즈</S.PurpleText>
      </S.Title>
      <S.Description>
        <span>1. 판매금은 전액 기부됩니다.</span>
        <br />
        <span>
          2. 굿즈
          {' '}
          <S.PurpleText>신청</S.PurpleText>
          은
          {' '}
          <S.PurpleText>구글독스</S.PurpleText>
          로 가능하며,
        </span>
        <br />
        <span>
          <span style={{ visibility: 'hidden' }}>2. </span>
          굿즈
          {' '}
          <S.PurpleText>수령</S.PurpleText>
          은
          {' '}
          <S.PurpleText>학교 방문</S.PurpleText>
          {' '}
          또는
          {' '}
          <S.PurpleText>택배 수령</S.PurpleText>
          {' '}
          중 선택 가능합니다.
        </span>
      </S.Description>
    </S.StyledTextSection>
  );
}
export default TextSection;

TextSection.propTypes = {

};
