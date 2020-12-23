import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Toast() {
  return (
    <S.StyledToast>
      <S.StyledContainer
        position="top-center"
        hideProgressBar
        autoClose={3000}
        pauseOnHover={false}
        newestOnTop
      />
    </S.StyledToast>
  );
}
export default Toast;

Toast.propTypes = {

};
