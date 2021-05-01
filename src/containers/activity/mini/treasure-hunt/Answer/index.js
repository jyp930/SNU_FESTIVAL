import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Answer() {
  return (
    <S.StyledAnswer>
      <S.Answer>
        <S.InputBox placeholder="풍선에서 얻은 패스워드 3자" />
        <S.Button>등록</S.Button>
      </S.Answer>
    </S.StyledAnswer>
  );
}
export default Answer;

Answer.propTypes = {

};
