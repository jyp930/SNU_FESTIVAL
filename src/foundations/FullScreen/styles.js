import styled, { css } from 'styled-components';
import { IoMdClose } from 'react-icons/all';
import { palette, zIndex } from '@S/index';

export const StyledFullScreen = styled.div`
  z-index: ${zIndex.fullScreen};
  position: fixed;
  top: 0;
  left: 0;
  
  background-color: lightblue;
  width: 0;
  height: 0;
  border-radius: 100%;
  transition: width 0.4s ease-out, height 0.4s ease-out, border-radius 0.8s ease;

  ${props => props.isFullScreen && css`
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  `};
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const CloseIcon = styled(IoMdClose)`
  width: 40px;
  height: 40px;
  color: ${palette.BLACK_NEWTRO};
`;
