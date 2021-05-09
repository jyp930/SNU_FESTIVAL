import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function TextSection() {
  return (
    <S.TextSection>
      <S.SubTitle>코로나 시국, 내가 겪은 온갖 에피소드를 공유해보자, 코풀기 대회!</S.SubTitle>
      <S.Title>코풀기 대회 우승자를 뽑아주세요!</S.Title>
      <S.Notice>
        1.
        {' '}
        <S.PurpleText>구글 연동된 SNU 계정</S.PurpleText>
        만 투표에 반영됩니다.
        {' '}
        <br />
        2. 각
        {' '}
        <S.PurpleText>분야 별</S.PurpleText>
        로
        {' '}
        <S.PurpleText>한 작품</S.PurpleText>
        에만 투표할 수 있습니다.
        <br />
        3. 제출하기를 누르면 선택한 작품에 대해 투표가 완료됩니다.
      </S.Notice>
      <S.Evaluation>
        * 사진을 누르면 해당 작품을 볼 수 있습니다.
        <br />
        * 제출하기를 누르면 스탬프 1개 지급!
      </S.Evaluation>
    </S.TextSection>
  );
}
export default TextSection;

TextSection.propTypes = {
};
