import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const disappear = css`
  @keyframes disappear {
    from { opacity: 1; }
    to { opacity: 0; }
  } 
`;

export const Envelope = styled.img`
  position: absolute;
  width: 60%;
  ${media.lessThan('medium')`
      width: 80%;
  `};
  z-index: ${({ theme }) => theme.zIndex.base};
`;

export const EnvelopeImage = styled.img`
  position: absolute;
  width: 60%;
  ${media.lessThan('medium')`
      width: 80%;
  `};
  z-index: ${({ theme }) => theme.zIndex.base + 1};
  
  ${disappear};
  opacity: 0;
  animation-name: disappear;
  animation-delay: 1s;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

export const StyledMissionCard = styled.div`
  position: relative;

  min-width: 264px;
  max-width: 500px;

  @media (orientation: landscape) {
    width: 60%;
    height: 100%;
  }
  
  @media (orientation: portrait) {
    width: 100%;
    height: auto;
  }
  
  ${disappear};
  opacity: 0;
  animation-name: disappear;
  animation-delay: 2.5s;
  animation-duration: 1s;
  animation-direction: reverse;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;

export const Card = styled.img`
  min-width: 264px;
  max-width: 500px;
  
  width: 100%;
  height: 100%;
`;

export const Stamp = styled.img`
  position: absolute;
  width: ${props => props.width}%;
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
`;
