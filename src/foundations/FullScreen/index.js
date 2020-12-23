import React from 'react';
import PropTypes from 'prop-types';
import Sal from '@F/Sal';
import * as S from './styles';

function FullScreen({
  children, isFullScreen, onCloseFullScreen, backgroundColor,
}) {
  return (
    <>
      <S.StyledFullScreen
        isFullScreen={isFullScreen}
        backgroundColor={backgroundColor}
      >
        { isFullScreen && (
          <Sal
            animation="slide-down"
            duration={800}
            delay={1000}
          >
            <>
              <S.CloseButton
                onClick={onCloseFullScreen}
              >
                <S.CloseIcon />
              </S.CloseButton>
              { children }
            </>
          </Sal>
        )}
      </S.StyledFullScreen>
    </>
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
