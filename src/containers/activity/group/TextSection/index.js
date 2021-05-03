import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function TextSection() {
  return (
    <S.StyledTextSection>
      <S.Texts>
        <p>주의 사항</p>
        <p>
          1. 캠을 켜달라~~
          <br />
          2. 이름 + 학번 이름으로 해달라~~~
        </p>
      </S.Texts>
      <S.Texts>
        <p>진행 시간</p>
        <p>
          1. 캠을 켜달라~~
          <br />
          2. 이름 + 학번 이름으로 해달라~~~
        </p>
      </S.Texts>
      <S.Texts>
        <p>게임 설명</p>
        <p>
          1. 캠을 켜달라~~
          <br />
          2. 이름 + 학번 이름으로 해달라~~~
        </p>
      </S.Texts>
    </S.StyledTextSection>
  );
}
export default TextSection;

TextSection.propTypes = {

};
