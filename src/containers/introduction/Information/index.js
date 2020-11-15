import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Information() {
  return (
    <S.StyledInformation>
      <S.InfoItem>
        <S.InfoTitle>
          활동 시기
        </S.InfoTitle>
        <S.InfoBody>
          <S.InfoBodyItem>
            <S.InfoContentTitle>
              주도성
            </S.InfoContentTitle>
            <S.InfoContent>
              학우들이 함께 웃을 수 있는
              즐거운 축제를 만들어 나갑니다.
            </S.InfoContent>
          </S.InfoBodyItem>
        </S.InfoBody>
      </S.InfoItem>
    </S.StyledInformation>
  );
}
export default Information;

Information.propTypes = {

};
