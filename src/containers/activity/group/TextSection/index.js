import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { theme } from '@S/index';
import * as S from './styles';

function TextSection() {
  const history = useHistory();
  const goToPage = useCallback(() => {
    history.push('/activity/group/images');
  }, [history]);

  return (
    <S.StyledTextSection>
      <S.Texts>
        <p>기본 룰 설명</p>
        <p>
          1. ZOOM의 투표 기능을 이용하는 게임입니다.
          <br />
          2. 준비된 질문에 맞게 1차 설문을 실시합니다.
          <br />
          3. 그 후. 사람들이 많이 선택했을 것 같은 답을 맞혀주세요!
        </p>
      </S.Texts>
      <S.Texts>
        <p>주의 사항</p>
        <p>
          1. 닉네임은 본인의 이름 + 학번 끝 2자리로 해주세요.
          <br />
          <span style={{ visibility: 'hidden' }}>1. </span>
          예시) 김페스, 2021-12345 ➡ 김페스45
          <br />
          2. 활발한 게임 진행을 위해 캠을 켜주세요.
          <br />
          <span style={{ visibility: 'hidden' }}>1. </span>
          랜덤 선물 추첨에 당첨될 확률 UP!
        </p>
      </S.Texts>
      <S.Texts>
        <p>진행 시간</p>
        <p>
          1. 수요일 19시에 시작하며 18시 30분부터 입장 가능합니다.
          <br />
          2. 약 20분마다 탈락자가 발생할 수 있습니다.
        </p>
      </S.Texts>
      <S.Texts>
        <p>가상 배경 꾸미기</p>
        <p>
          - 원하시는 분은 아래 페이지에서 이미지를 다운받은 후
          <br />
          <span style={{ visibility: 'hidden' }}>- </span>
          가상 배경으로 설정해주세요!
          <br />
          -
          <span style={{ color: theme.palette.PURPLE50, textDecoration: 'underline', cursor: 'pointer' }} onClick={goToPage}> 가상 배경 다운받으러 가기</span>
        </p>
      </S.Texts>
    </S.StyledTextSection>
  );
}
export default TextSection;

TextSection.propTypes = {

};
