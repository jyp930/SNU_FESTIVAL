import React, { useEffect } from 'react';
import sal from 'sal.js';
import 'sal.js/dist/sal.css';
import PropTypes from 'prop-types';
import * as S from './styles';

function SalFrame() {
  useEffect(
    () => {
      console.log('1', sal);
      sal({
        once: false,
      });
    }, [],
  );

  return (
    <S.StyledSalFrame
      data-sal="fade"
    />
  );
}
export default SalFrame;

SalFrame.propTypes = {

};
