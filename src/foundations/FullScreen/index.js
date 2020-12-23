import React from 'react';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import { CenterComponent } from '@/mob-x/center';
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
          <Slide top>
            <>
              <S.CloseButton
                onClick={onCloseFullScreen}
              >
                <S.CloseIcon />
              </S.CloseButton>
              { children }
            </>
          </Slide>
        )}
      </S.StyledFullScreen>

      <S.Center>
        <CenterComponent />
      </S.Center>
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
