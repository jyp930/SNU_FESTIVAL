import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import sal from 'sal.js';
import * as S from './styles';

function FullScreen({ children, isFullScreen, onCloseFullScreen, backgroundColor }) {
  useEffect(() => {
    sal();
  }, [isFullScreen]);

  return (
    <S.StyledFullScreen
      isFullScreen={isFullScreen}
      backgroundColor={backgroundColor}
    >
      { isFullScreen && (
        <div
          data-sal="slide-down"
          data-sal-easing="ease"
          data-sal-duration="800"
          data-sal-delay="1000"
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
  backgroundColor: PropTypes.string,
};

FullScreen.defaultProps = {
  children: <></>,
  backgroundColor: 'lightblue',
};
