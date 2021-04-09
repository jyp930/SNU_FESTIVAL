import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function TextSection() {
  return (
    <S.TextSection>
      <S.Title>
        당신의
        {' '}
        <S.PurpleText>공연</S.PurpleText>
        에
        {' '}
        <S.PurpleText>투표</S.PurpleText>
        하세요!
      </S.Title>
      <S.Notice>
        1.
        {' '}
        <S.PurpleText>구글 연동된 SNU 계정</S.PurpleText>
        만 투표 가능합니다.
        {' '}
        <br />
        2. 한 계정당
        {' '}
        <S.PurpleText>3개</S.PurpleText>
        까지 하트를 누를 수 있습니다.
        {' '}
        <br />
        3. 제출하기를 누르면 선택한 팀에게 투표가 완료됩니다.
      </S.Notice>
      <S.Evaluation>
        * 사진을 누르면 공연 영상을 볼 수 있습니다.
      </S.Evaluation>
    </S.TextSection>
  );
}
export default TextSection;

TextSection.propTypes = {
};
