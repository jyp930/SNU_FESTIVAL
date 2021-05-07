import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FortuneTeller from '@I/tarot/fortune-teller.png';
import Glow from '@I/tarot/glow.png';
import Ball from '@I/tarot/ball.png';
import BackFace from '@I/tarot/backface.svg';
import { preloadImage } from '@U/functions/preload';
import Ready from '@C/tarot/Ready';
import * as S from '../Tarot/styles';
import * as SS from './styles';

function Intro({ isMobile, onButtonClick }) {
  useEffect(() => {
    preloadImage(BackFace);
  }, []);

  const [isReady, setIsReady] = useState(false);
  const showReady = useCallback(() => {
    setIsReady(true);
    setTimeout(() => onButtonClick(), 6000);
  }, [onButtonClick]);

  return (
    <>
      <SS.IntroWrapper opacity={!isReady ? 1 : 0}>
        <S.Images>
          <S.Image src={FortuneTeller} alt="" width={isMobile ? 63 : 25} top={isMobile ? 30 : 20} />
          <S.Image src={Glow} alt="" width={isMobile ? 60 : 24} top={isMobile ? 30 : 20} fluctuation />
          <S.Image src={Ball} alt="" width={isMobile ? 63 : 25} top={isMobile ? 30 : 20} />
        </S.Images>
        <SS.Bottoms>
          <p>오늘의 행운은 어떨까?</p>
          <p>오늘의 행운은 어떨까?</p>
          <SS.Button onClick={showReady}>시작하기</SS.Button>
        </SS.Bottoms>
      </SS.IntroWrapper>
      {isReady && <Ready />}
    </>
  );
}
export default Intro;

Intro.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
