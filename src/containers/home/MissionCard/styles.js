import styled, { css } from 'styled-components';

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
