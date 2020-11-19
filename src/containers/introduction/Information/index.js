import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const Item = (
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
);

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
          <S.InfoBodyItem>
            <S.InfoContentTitle>
              선한 영향력
            </S.InfoContentTitle>
            <S.InfoContent>
              자유롭게 반론하되, 결론이 난 후에는
              한 몸으로 움직입니다.
            </S.InfoContent>
          </S.InfoBodyItem>
        </S.InfoBody>
      </S.InfoItem>
      {Item}
      {Item}
    </S.StyledInformation>
  );
}
export default Information;

Information.propTypes = {

};
