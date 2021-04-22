import styled from 'styled-components';

export const StyledAliceTheme = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
`;

export const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  @keyframes background {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  opacity: 0;
  animation-name: background;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-delay: 1s;
`;
