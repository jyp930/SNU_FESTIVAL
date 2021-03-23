import styled from 'styled-components';

export const StyledGuestBook = styled.div`
  height: ${({ theme }) => theme.windowHeight}px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  min-height: 65px;
  background-color: mediumpurple;
`;
