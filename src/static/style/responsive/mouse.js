import { css } from 'styled-components';

export const HoverStyle = css`
  transition: all .25s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.03);
  }
`;
