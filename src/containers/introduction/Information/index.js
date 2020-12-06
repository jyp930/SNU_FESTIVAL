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
          축하사 구성
        </S.InfoTitle>
        <S.InfoBody>
          <S.InfoBodyItem>
            <S.InfoContent>
              축제하는 사람들은 총학생회 산하기구입니다.
              <br />
              축하사장과 부축하사장, 그리고 네 명의 팀장단이 축제를 이끌어 나갑니다.
              <br />
              총 30명 남짓의 인원이 서울대학교의 축제를 직접 기획하고 진행합니다.
            </S.InfoContent>
          </S.InfoBodyItem>
        </S.InfoBody>
      </S.InfoItem>
      <S.InfoItem>
        <S.InfoTitle>
          활동 시기
        </S.InfoTitle>
        <S.InfoBody>
          <S.InfoBodyItem>
            <S.InfoContentTitle>
              봄축제
            </S.InfoContentTitle>
            <S.InfoContent>
              12월에 모집을 시작하고, 1월부터 활동합니다.<br />
              약 5개월 간 함께 5월에 있을 봄축제를 만들어 나갑니다.
            </S.InfoContent>
          </S.InfoBodyItem>
          <S.InfoBodyItem>
            <S.InfoContentTitle>
              가을축제
            </S.InfoContentTitle>
            <S.InfoContent>
              5월에 모집을 시작하고, 6월부터 활동합니다.<br />
              약 3개월 간 함께 9월에 있을 가을축제를 만들어 나갑니다.
            </S.InfoContent>
          </S.InfoBodyItem>
        </S.InfoBody>
      </S.InfoItem>
      <S.InfoItem>
        <S.InfoTitle>
          축하사 정보
        </S.InfoTitle>
        <S.InfoBody>
          <S.InfoBodyItem>
            <S.InfoContentTitle>
              위치
            </S.InfoContentTitle>
            <S.InfoContent>
              서울특별시 관악구 관악로 1 서울대학교 학생회관(63동) 409호
            </S.InfoContent>
            <S.InfoContentTitle>
              이메일
            </S.InfoContentTitle>
            <S.InfoContent>
              snufestival@gmail.com
            </S.InfoContent>
            <S.InfoContentTitle>
              연락처
            </S.InfoContentTitle>
            <S.InfoContent>
              010-2770-2702 권지현
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
