import React from 'react';
import PropTypes from 'prop-types';
import mascot from '@I/svg/mascot/mascot-basic.svg';
import * as S from './styles';

function Footer() {
  return (
    <S.StyledFooter>
      <S.Image src={mascot} alt="?" />
    </S.StyledFooter>
  );
}
export default Footer;

Footer.propTypes = {

};
