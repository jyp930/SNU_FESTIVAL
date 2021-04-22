import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Rule() {
  return (
    <S.StyledRule>
      <S.Texts>
        <p>게임 설명</p>
        <p>
          1-1 웹으로 접속한 경우, A~O 까지의 알파벳을 누른다.
          <br />
          1-2. 모바일 기기로 접속한 경우, 흰 선 안의 영역을 터치한다.
          <br />
          2. 노래를 듣고 3가지 곡을 맞춘다.
          <br />
          3. 상단에 노래 3가지를 기입한다.
        </p>
        <p>@inspired by palatab</p>
      </S.Texts>
    </S.StyledRule>
  );
}
export default Rule;

Rule.propTypes = {

};
