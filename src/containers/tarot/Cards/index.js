import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import BackFace from '@I/tarot/backface.svg';
import { useHistory } from 'react-router';
import { getRandomElementFromArray } from '@U/functions/array';
import * as S from './styles';

function Cards({ isMobile, isIPad }) {
  const width = useMemo(() => {
    if (isIPad) return 20;
    if (isMobile) return 25;
    return 8;
  }, [isIPad, isMobile]);

  const tops = useMemo(() => {
    if (isIPad) return [10, 30, 50, 70];
    if (isMobile) return [13, 33, 53, 73];
    return [5, 28, 51, 74];
  }, [isIPad, isMobile]);

  const lefts = useMemo(() => {
    if (isIPad) return [20, 40, 60];
    if (isMobile) return [12.5, 37.5, 62.5];
    return [38, 46, 54];
  }, [isIPad, isMobile]);

  const history = useHistory();
  const goToResult = useCallback(() => {
    history.push(`/tarot/${getRandomElementFromArray([
      'achieve', 'calm', 'delight', 'harmony', 'improvement', 'passion',
      'pleasure', 'precious', 'refresh', 'romance', 'stress-free', 'sympathy',
    ])}`);
  }, [history]);

  // 마우스 클릭 막기
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsReady(true), 3300);
  }, []);

  return (
    <S.StyledCards pointerEvents={isReady ? 'auto' : 'none'}>
      {Array(12).fill(null).map((_, index) => (
        <S.Image
          src={BackFace}
          alt="카드 뒷면"
          index={index}
          key={index}
          width={width}
          top={95}
          left={isMobile ? 40 : 45}
          delay={index * 0.3}
          translate={{ top: tops[Math.floor(index / 3)], left: lefts[index % 3] }}
          onClick={goToResult}
        />
      ))}
    </S.StyledCards>
  );
}
export default Cards;

Cards.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isIPad: PropTypes.bool.isRequired,
};
