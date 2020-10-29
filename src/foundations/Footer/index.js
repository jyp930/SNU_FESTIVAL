import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import mascot from '@I/svg/mascot/mascot-basic.svg';
import facebook from '@I/svg/icon/facebook.svg';
import instagram from '@I/svg/icon/instagram.svg';
import * as S from './styles';

function Footer() {
  const [isOpen, setIsOpen] = useState(true);

  const openNewSite = useCallback((url) => {
    window.open(url, '_blank');
  }, []);

  return (
    <S.StyledFooter>
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
