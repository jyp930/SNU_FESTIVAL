import React from 'react';
import LottieFrame from '@F/lottie/LottieFrame';
import loadingPacManJson from '@I/lottie/loading-pacman.json';
import PropTypes from 'prop-types';

function LottieLoadingPacMan({ width, height }) {
  return (
    <LottieFrame
      width={width}
      height={height}
      animationJson={loadingPacManJson}
    />
  );
}
export default LottieLoadingPacMan;

LottieLoadingPacMan.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

LottieLoadingPacMan.defaultProps = {
  width: undefined,
  height: undefined,
};
