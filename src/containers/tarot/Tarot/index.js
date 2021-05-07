import React, { useCallback, useMemo, useState } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Universe from '@I/tarot/universe.jpg';
import StarCluster from '@I/tarot/start-cluster.png';
import ConstellationOne from '@I/tarot/constellation-1.png';
import ConstellationTwo from '@I/tarot/constellation-2.png';
import ConstellationThree from '@I/tarot/constellation-3.png';
import Start from '@C/tarot/Start';
import Cards from '@C/tarot/Cards';
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
    <S.StyledTarot>
      <HeaderContent backgroundColor="transparent" color="black">오늘의 타로</HeaderContent>
      <S.Background src={Universe} alt="" />
      <S.Body>
        <S.Images position="fixed">
          <S.Image src={StarCluster} alt="" width={isMobile ? 80 : 40} top={10} flicker duration={3} />
          <S.Image src={ConstellationOne} alt="" width={isMobile ? 30 : 15} top={isMobile ? 8 : 10} right={30} flicker duration={2} />
          <S.Image src={ConstellationTwo} alt="" width={isMobile ? 30 : 15} top={isMobile ? 20 : 30} right={isMobile ? 10 : 25} flicker duration={7} />
          <S.Image src={ConstellationThree} alt="" width={isMobile ? 30 : 15} top={isMobile ? 20 : 20} left={isMobile ? 5 : 20} flicker duration={3.5} />
        </S.Images>
        {(step === 1) && isLoaded && <Start isMobile={isMobile} onButtonClick={nextStep} />}
        {(step === 2) && isLoaded && <Cards isMobile={isMobile} isIPad={isIPad} />}
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
