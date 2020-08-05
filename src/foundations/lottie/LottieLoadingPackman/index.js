import React from 'react';
import LottieFrame from '@/foundations/lottie/LottieFrame';
import { default as loadingPacManJson } from '@/static/image/lottie/loading-pacman.json';

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
