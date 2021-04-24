import React from 'react';
import PropTypes from 'prop-types';
import AliceBackground from '@I/activity/riddle/alice/alice-background.jpg';
import * as S from './styles';

function AliceTheme() {
  return (
    <S.StyledAliceTheme>
      <S.Background src={AliceBackground} alt="앨리스 배경" />
      {/* TODO: CONTENT 는 유령의 집이랑 공통 */}
      <S.Content>
        <S.Question />
        <S.Answer>
          <S.InputBox placeholder="정답을 입력하세요" />
          <S.Button>등록</S.Button>
        </S.Answer>
      </S.Content>
    </S.StyledAliceTheme>
  );
}
export default AliceTheme;

AliceTheme.propTypes = {

};
