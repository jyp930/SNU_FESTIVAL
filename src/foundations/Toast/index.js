import React from 'react';
import * as S from './styles';

function Toast() {
  return (
    <S.StyledToast>
      <S.StyledContainer
        position="top-center"
        hideProgressBar
        autoClose={1500}
        pauseOnHover={false}
        newestOnTop
      />
    </S.StyledToast>
  );
}
export default Toast;

Toast.propTypes = {

};
