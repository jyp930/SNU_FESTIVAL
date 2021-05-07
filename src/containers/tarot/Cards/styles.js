import styled, { css } from 'styled-components';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledCards = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  position: absolute;
  width: ${props => props.width}%;
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
  ${props => props.bottom && css`bottom: ${props.bottom}%`};
  ${HoverStyle};
  
  @keyframes move-${({ index }) => index} {
    0% { top: 95%; left: ${({ left }) => left}%; }
    100% { top: ${({ translate }) => translate.top}%; left: ${({ translate }) => translate.left}%; }
  }
  
  transform: translate(0, 0);
  animation-name: move-${({ index }) => index};
  animation-delay: ${({ delay }) => delay}s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;
