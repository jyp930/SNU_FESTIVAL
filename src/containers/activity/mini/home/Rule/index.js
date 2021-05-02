import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Rule() {
  return (
    <S.StyledRule>
      <S.Texts>
        <p>스탬프 받는 법</p>
        <p>
          1. 미니게임 1개 클리어 시, 스탬프 1개 지급!
          <br />
          2. 미니게임 3개 클리어 시, 스탬프 1개 추가 지급!
        </p>
        <p>🎁 SNS 공유 이벤트에 참여하면 경품 당첨 확률 30% UP!</p>
      </S.Texts>
    </S.StyledRule>
  );
}
export default Rule;

Rule.propTypes = {

};
