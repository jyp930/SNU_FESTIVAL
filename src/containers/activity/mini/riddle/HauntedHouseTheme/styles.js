import styled from 'styled-components';

export const StyledHauntedHouseTheme = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  
  @keyframes background {
    0% { background-color: transparent; }
    100% { background-color: red; }
  }

  animation-name: background;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-delay: 1s;
`;
