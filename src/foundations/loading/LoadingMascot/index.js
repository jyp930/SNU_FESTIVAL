import React from 'react';
import RunningMascot from '@I/video/loading-running-mascot.gif';
import * as S from './styles';

function LoadingMascot() {
  return (
    <S.StyledLoadingMascot>
      <img src={RunningMascot} alt="" />
    </S.StyledLoadingMascot>
  );
}
export default LoadingMascot;

LoadingMascot.propTypes = {

};
