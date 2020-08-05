import React from 'react';
import PropTypes from 'prop-types';
import ReactLottie from 'react-lottie';
import * as S from './styles';

function LottieFrame({ animationJson, width, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationJson,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <S.StyledLottieFrame>
      <ReactLottie
        options={defaultOptions}
        height={height ?? 400}
        width={width ?? 400}
      />
    </S.StyledLottieFrame>
  );
}
export default LottieFrame;

LottieFrame.propTypes = {
  animationJson: PropTypes.objectOf(PropTypes.object).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

LottieFrame.defaultProps = {
  width: 400,
  height: 400,
};
