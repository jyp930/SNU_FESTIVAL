import styled, { css } from 'styled-components';
import '@/static/font/font.css';
import { HoverStyle } from '@S/responsive/mouse';
import { FluctuationAnimation, VibrateAnimation } from '@S/responsive/animation';

export const StyledHome = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  min-height: ${({ height }) => height}px;
  
  z-index: ${({ theme }) => theme.zIndex.base};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const IslandWrapper = styled.div`
  position: relative;
  margin: auto;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export const Island = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;

export const Landmark = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
  ${props => props.bottom && css`bottom: ${props.bottom}%`};
  
  ${HoverStyle};
  &:hover {
    transform: scale(1.04);
  }
  
  ${props => props.vibrate && VibrateAnimation};
  
  ${props => props.glow && css`
    pointer-events: none;
    ${FluctuationAnimation};
  `};
`;
