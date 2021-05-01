import styled from 'styled-components';

export const Mascot = styled.img`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;

  width: 4.5rem;
  height: auto;
  cursor: pointer;
  
  @keyframes zigzag {
    0% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(-2rem, 2rem) rotate(-10deg); }
    66% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(4rem, 4rem) rotate(50deg); }
  }
  will-change: transform;
  animation-name: zigzag;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
