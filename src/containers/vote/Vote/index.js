import React, { useMemo } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import TextSection from '@C/vote/TextSection';
import VoteSection from '@C/vote/VoteSection';
import * as S from './styles';

function Vote({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  return (
    <S.StyledVote>
      <HeaderContent>공연</HeaderContent>
      <S.Body>
        <TextSection isMobile={isMobile} />
        <S.VoteWrapper>
          <VoteSection theme={theme} isMobile={isMobile} />
        </S.VoteWrapper>
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
