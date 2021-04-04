import React, { useMemo } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import * as S from './styles';

function Vote({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  return (
    <S.StyledVote>
      <HeaderContent>공연</HeaderContent>
      <S.Body>
        <S.TextSection>
          <S.Title>
            당신의
            {' '}
            <S.PurpleText>공연</S.PurpleText>
            에
            {' '}
            {isMobile && <br />}
            <S.PurpleText>투표</S.PurpleText>
            하세요!
          </S.Title>
          <S.Notice>
            1.
            {' '}
            <S.PurpleText>구글 연동된 SNU 계정</S.PurpleText>
            만 투표가능합니다.
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
            * 온라인 투표 30%, 공연자 상호평가 70%
          </S.Evaluation>
        </S.TextSection>
      </S.Body>
    </S.StyledVote>
  );
}
export default withTheme(Vote);

Vote.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number.isRequired,
  }).isRequired,
};
