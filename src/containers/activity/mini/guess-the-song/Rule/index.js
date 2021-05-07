import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Rule() {
  return (
    <S.StyledRule>
      <S.Texts>
        <p>게임 설명</p>
        <p>
          1-1. PC일 경우, 키보드로 A부터 O까지의 알파벳을 누른다.
          <br />
          1-2. 모바일 기기일 경우, 흰 선 안의 영역을 마구 터치한다.
          <br />
          2. 노래를 듣고 5곡 중 3가지 곡을 맞힌다.
          <br />
          3. 노래 제목 3가지를 적고 정답 버튼을 누른다.
        </p>
        <p>@inspired by palatab</p>
      </S.Texts>
    </S.StyledRule>
  );
}
export default Rule;

Rule.propTypes = {

};
