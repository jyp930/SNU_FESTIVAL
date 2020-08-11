import React from 'react';
import LottieFrame from '@F/lottie/LottieFrame';
import loadingPacManJson from '@I/lottie/loading-pacman.json';

function LottieLoadingPacMan() {
  return (
    <LottieFrame
      animationJson={loadingPacManJson}
    />
  );
}
export default LottieLoadingPacMan;

LottieLoadingPacMan.propTypes = {

};
