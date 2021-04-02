import styled from 'styled-components';

export const StyledIntroduction = styled.div`
  height: ${({ theme }) => theme.windowHeight}px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
`;
