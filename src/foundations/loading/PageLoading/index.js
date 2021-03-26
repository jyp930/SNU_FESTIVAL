import React from 'react';
import PropTypes from 'prop-types';
import LottieLoadingPacMan from '@F/lottie/LottieLoadingPackman';
import * as S from './styles';

function PageLoading({ message }) {
  return (
    <S.StyledPageLoading>
      <S.Animation><LottieLoadingPacMan /></S.Animation>
      <S.Message>{message}</S.Message>
    </S.StyledPageLoading>
  );
}
export default PageLoading;

PageLoading.propTypes = {
  message: PropTypes.string,
};

PageLoading.defaultProps = {
  message: '로딩 중입니다...',
};
