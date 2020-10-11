import styled, { css } from 'styled-components';
import { IoMdClose } from 'react-icons/all';
import { palette, zIndex } from '@S/index';

export const StyledFullScreen = styled.div`
  z-index: ${zIndex.fullScreen};
  position: fixed;
  top: 0;
  left: 0;
  
  background-color: ${props => props.backgroundColor};
  width: 0;
  height: 0;
  border-radius: 100%;
  
  transform: scale(1.8);
  transition: all 0.2s ease-out;

  ${props => props.isFullScreen && css`
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    
    transform: scale(1);
    transition: width 0.5s ease-out, height 0.5s ease-out, border-radius 0.9s ease, transform 1s ease;
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
