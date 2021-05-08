import styled from 'styled-components';

export const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  object-fit: cover;
`;
