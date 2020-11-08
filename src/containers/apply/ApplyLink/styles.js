import styled from 'styled-components';
import { palette } from '@S/index';

export const StyledApplyLink = styled.div`
  width: 100%;
  height: 35vh;
  background-color: ${palette.PINK_PASTEL};
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.p`
  margin: 0;
  font-size: 3rem;
  color: ${palette.BLUE_NEWTRO};
  text-decoration: underline;
  cursor: pointer;
`;
