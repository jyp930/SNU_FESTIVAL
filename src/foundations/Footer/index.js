import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import mascot from '@I/svg/mascot/mascot-basic.svg';
import facebook from '@I/svg/icon/facebook.svg';
import instagram from '@I/svg/icon/instagram.svg';
import { preloadImage } from '@U/functions/preload';
import * as S from './styles';

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const openNewSite = useCallback((url) => {
    window.open(url, '_blank');
  }, []);

  useEffect(() => {
    [facebook, instagram].map(preloadImage);
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
            <S.InfoText index={2}>축하사장 권지현 jjang@snu.ac.kr</S.InfoText>
            <S.InfoText index={3}>개발팀장 박용주 jyp@snu.ac.kr</S.InfoText>
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
