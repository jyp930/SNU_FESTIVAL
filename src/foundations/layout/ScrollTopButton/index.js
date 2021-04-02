import React, { useCallback } from 'react';
import ScrollTop from '@I/icon/scroll-top.svg';
import * as S from './styles';

function ScrollTopButton() {
  const scrollTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.StyledScrollTopButton onClick={scrollTop}>
      <S.Image src={ScrollTop} alt="ScrollTop" />
    </S.StyledScrollTopButton>
  );
}
export default ScrollTopButton;

ScrollTopButton.propTypes = {

};
