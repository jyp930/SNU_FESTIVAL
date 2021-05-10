import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Rule() {
  return (
    <S.StyledRule>
      <S.Texts>
        <p>게임 설명</p>
        <p>
          1. 0~6까지의 흑백 타일 중 하나를 제시한다.
          <br />
          (0/2/4/6는 흑색, 1/3/5는 백색 타일이다.)
          <br />
          2. 상대방이 낸 타일의 색깔만을 보고 타일을 유추해서 더 높은 숫자의 타일을 제시한다.
          <br />
          3. 아래 소용돌이를 눌러 줌으로 입장!
          <br />
          <br />
          <span>
            ⏱ 5/10 11:00~13:30, 16:00~17:00
            <br />
            ⏱ 5/11 11:00~17:00
            <br />
            ⏱ 5/12 11:00~12:30, 15:30~20:00
          </span>
        </p>
      </S.Texts>
    </S.StyledRule>
  );
}
export default Rule;

Rule.propTypes = {

};
