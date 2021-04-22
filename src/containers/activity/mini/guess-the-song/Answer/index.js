import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Answer() {
  return (
    <S.StyledAnswer>
      <S.Inputs>
        <S.InputBox placeholder="뭐게요" />
        <S.InputBox placeholder="맞혀봐요" />
        <S.InputBox placeholder="응?" />
      </S.Inputs>
      <S.Button onClick={() => alert('제출!')}>정답!</S.Button>
    </S.StyledAnswer>
  );
}
export default Answer;

Answer.propTypes = {

};
