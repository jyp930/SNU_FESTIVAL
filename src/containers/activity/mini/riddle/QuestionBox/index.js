import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function QuestionBox({ answerColor }) {
  return (
    <S.Content>
      <S.Question />
      <S.Answer>
        <S.InputBox color={answerColor} placeholder="힌트는 내일 공개됩니다." />
        <S.Button>등록</S.Button>
      </S.Answer>
    </S.Content>
  );
}
export default QuestionBox;

QuestionBox.propTypes = {
  answerColor: PropTypes.string,
};

QuestionBox.defaultProps = {
  answerColor: null,
};
