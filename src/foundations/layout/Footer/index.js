import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import mascot from '@I/svg/mascot/mascot-basic.svg';
import facebook from '@I/icon/facebook.svg';
import instagram from '@I/icon/instagram.svg';
import { preloadImage } from '@U/functions/preload';
import * as S from './styles';

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const openNewSite = useCallback((url) => {
    window.open(url, '_blank');
  }, []);

  useEffect(() => {
    [facebook, instagram].forEach(preloadImage);
  }, []);

  return (
    <S.StyledFooter id="Footer">
      { isOpen && (
        <>
          <S.LinkMenu
            index={1}
            onClick={() => openNewSite('https://www.instagram.com/snufestival')}
          >
            <S.Image src={instagram} alt="Instagram" />
          </S.LinkMenu>
          <S.LinkMenu
            index={2}
            onClick={() => openNewSite('https://www.facebook.com/snufestival')}
          >
            <S.Image src={facebook} alt="facebook" />
          </S.LinkMenu>
          <S.Info>
            <S.InfoText index={1}>축제하는 사람들 snufestival@gmail.com</S.InfoText>
            <S.InfoText index={2}>축하사장 권지현 geehyun0105@snu.ac.kr</S.InfoText>
            <S.InfoText index={3}>디자이너 이수경 sk990120@snu.ac.kr</S.InfoText>
            <S.InfoText index={4}>개발자 박용주 jyp930@snu.ac.kr</S.InfoText>
          </S.Info>
        </>
      )}
      <S.ExpandButton
        onClick={() => setIsOpen(state => !state)}
      >
        <S.Image src={mascot} alt="?" />
      </S.ExpandButton>
    </S.StyledFooter>
  );
}
export default Footer;

Footer.propTypes = {

};
