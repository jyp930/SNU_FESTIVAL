import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Answer() {
  return (
    <S.StyledAnswer>
      <S.Answer>
        <S.InputBox placeholder="게임을 통해 획득한 패스워드 5자" />
        <S.Button>등록</S.Button>
      </S.Answer>
    </S.StyledAnswer>
  );
}
export default Answer;

Answer.propTypes = {

};
