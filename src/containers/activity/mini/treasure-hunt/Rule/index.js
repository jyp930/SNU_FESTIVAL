import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Rule() {
  return (
    <S.StyledRule>
      <S.Texts>
        <p>게임 설명</p>
        <p>
          1. Start 버튼을 눌러 시작한다.
          <br />
          <span style={{ visibility: 'hidden' }}>1. </span>
          (첫 보물이 있는 페이지로 자동 이동)
          <br />
          2. 웹사이트 곳곳에 숨겨져있는 보물 3개를 찾는다.
          <br />
          3. 보물에서 얻은 순서대로 알파벳을 입력한다.
        </p>
      </S.Texts>
    </S.StyledRule>
  );
}
export default Rule;

Rule.propTypes = {

};
