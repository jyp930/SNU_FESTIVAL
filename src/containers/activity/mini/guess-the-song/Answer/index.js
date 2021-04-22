import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Answer() {
  return (
    <S.StyledAnswer>
      <S.Inputs>
        <S.InputBox />
        <S.InputBox />
        <S.InputBox />
      </S.Inputs>
      <S.Button onClick={() => alert('제출!')}>등록</S.Button>
    </S.StyledAnswer>
  );
}
export default Answer;

Answer.propTypes = {

};
