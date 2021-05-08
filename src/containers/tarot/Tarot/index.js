import React, { useCallback, useMemo, useState } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Intro from '@C/tarot/Intro';
import Cards from '@C/tarot/Cards';
import Background from '@C/tarot/Background';
import * as S from './styles';

function Tarot({ theme }) {
  const isLoaded = useMemo(() => theme.windowWidth > 0, [theme.windowWidth]);
  const isMobile = useMemo(() => theme.windowWidth < 1170, [theme.windowWidth]);
  const isIPad = useMemo(() => theme.windowWidth >= 768 && theme.windowWidth < 1170, [theme.windowWidth]);
  const [step, setStep] = useState(1);

  const nextStep = useCallback(() => {
    setStep(state => state + 1);
  }, []);

  return (
    <>
      <Background isMobile={isMobile} />
      <S.StyledTarot>
        <HeaderContent backgroundColor="transparent" color="white">{step === 1 ? '오늘의 타로' : ''}</HeaderContent>
        <S.Body>
          {(step === 1) && isLoaded && <Intro isMobile={isMobile} onButtonClick={nextStep} />}
          {(step === 2) && isLoaded && <Cards isMobile={isMobile} isIPad={isIPad} />}
        </S.Body>
      </S.StyledTarot>
    </>
  );
}
export default withTheme(Tarot);

Tarot.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
