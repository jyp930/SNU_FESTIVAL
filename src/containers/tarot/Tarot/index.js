import React, { useMemo } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Background from '@I/tarot/universe.jpg';
import StarCluster from '@I/tarot/start-cluster.png';
import ConstellationOne from '@I/tarot/constellation-1.png';
import ConstellationTwo from '@I/tarot/constellation-2.png';
import ConstellationThree from '@I/tarot/constellation-3.png';
import FortuneTeller from '@I/tarot/fortune-teller.png';
import Glow from '@I/tarot/glow.png';
import Ball from '@I/tarot/ball.png';
import * as S from './styles';

function Tarot({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 1170, [theme.windowWidth]);

  return (
    <S.StyledTarot>
      <HeaderContent backgroundColor="transparent" color="black">오늘의 타로</HeaderContent>
      <S.Background src={Background} alt="" />
      <S.Body>
        <S.Images>
          <S.Image src={StarCluster} alt="" width={isMobile ? 80 : 40} top={10} flicker duration={5} />
          <S.Image src={ConstellationOne} alt="" width={isMobile ? 30 : 15} top={isMobile ? 8 : 10} right={30} flicker duration={2} />
          <S.Image src={ConstellationTwo} alt="" width={isMobile ? 30 : 15} top={isMobile ? 20 : 30} right={isMobile ? 10 : 25} flicker duration={7} />
          <S.Image src={ConstellationThree} alt="" width={isMobile ? 30 : 15} top={isMobile ? 20 : 20} left={isMobile ? 5 : 20} flicker duration={3.5} />
          <S.Image src={FortuneTeller} alt="" width={isMobile ? 60 : 25} top={isMobile ? 30 : 20} />
          <S.Image src={Glow} alt="" width={isMobile ? 57 : 24} top={isMobile ? 30 : 20} fluctuation />
          <S.Image src={Ball} alt="" width={isMobile ? 60 : 25} top={isMobile ? 30 : 20} />
        </S.Images>
        <S.Bottoms>
          <p>오늘의 행운은 어떨까?</p>
          <p>오늘의 행운은 어떨까?</p>
          <S.Button>시작하기</S.Button>
        </S.Bottoms>
      </S.Body>
    </S.StyledTarot>
  );
}
export default withTheme(Tarot);

Tarot.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
