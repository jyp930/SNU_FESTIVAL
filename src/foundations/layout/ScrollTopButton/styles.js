import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledScrollTopButton = styled.div`
  ${FlexCenterStyle};
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  
  width: 3.75rem;
  height: 3.75rem;
  cursor: pointer;
  border-radius: 50%;
  
  z-index: ${({ theme }) => theme.zIndex.topButton};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
