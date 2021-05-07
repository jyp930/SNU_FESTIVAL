import React from 'react';
import PropTypes from 'prop-types';
import FortuneTeller from '@I/tarot/fortune-teller.png';
import Glow from '@I/tarot/glow.png';
import Ball from '@I/tarot/ball.png';
import * as S from '../Tarot/styles';
import * as SS from './styles';

function Start({ isMobile, onButtonClick }) {
  return (
    <>
      <S.Images>
        <S.Image src={FortuneTeller} alt="" width={isMobile ? 63 : 25} top={isMobile ? 30 : 20} />
        <S.Image src={Glow} alt="" width={isMobile ? 60 : 24} top={isMobile ? 30 : 20} fluctuation />
        <S.Image src={Ball} alt="" width={isMobile ? 63 : 25} top={isMobile ? 30 : 20} />
      </S.Images>
      <SS.Bottoms>
        <p>오늘의 행운은 어떨까?</p>
        <p>오늘의 행운은 어떨까?</p>
        <SS.Button onClick={onButtonClick}>시작하기</SS.Button>
      </SS.Bottoms>
    </>
  );
}
export default Start;

Start.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
