import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import sal from 'sal.js';
import * as S from './styles';

function FullScreen({ children, isFullScreen, onCloseFullScreen }) {
  useEffect(() => {
    sal();
  }, [isFullScreen]);

  return (
    <S.StyledFullScreen
      isFullScreen={isFullScreen}
    >
      { isFullScreen && (
        <div
          data-sal="zoom-out"
          data-sal-easing="ease"
          data-sal-duration="1000"
          data-sal-delay="800"
        >
          <S.CloseButton
            onClick={onCloseFullScreen}
          >
            <S.CloseIcon />
          </S.CloseButton>
          { children }
        </div>
      )}
    </S.StyledFullScreen>
  );
}
export default FullScreen;

FullScreen.propTypes = {
  children: PropTypes.element,
  isFullScreen: PropTypes.bool.isRequired,
  onCloseFullScreen: PropTypes.func.isRequired,
};

FullScreen.defaultProps = {
  children: <></>,
};
