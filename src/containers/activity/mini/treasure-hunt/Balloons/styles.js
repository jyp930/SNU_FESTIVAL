import styled, { css } from 'styled-components';

export const StyledBalloons = styled.div`

`;

export const Balloons = styled.div`
  position: relative;
  width: 100%;
  height: 40%;
`;

export const Balloon = styled.img`
  position: absolute;
  width: ${({ width }) => width}px;
  height: auto;
  ${props => props.top && css`top: ${props.top}%`};
  ${props => props.left && css`left: ${props.left}%`};
  ${props => props.right && css`right: ${props.right}%`};
  
  @keyframes float {
    0%, 100%{ transform:translateY(0) rotate(-4deg); }
    50%{ transform:translateY(-25px) rotate(4deg); }
  }
  animation: float infinite;
  animation-duration: ${({ duration }) => duration}s;
`;
