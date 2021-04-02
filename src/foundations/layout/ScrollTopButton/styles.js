import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';

export const StyledScrollTopButton = styled.div`
  ${FlexCenterStyle};
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  border-radius: 50%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
