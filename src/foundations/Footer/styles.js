import styled, { css } from 'styled-components';
import { HoverStyle } from '@S/responsive/mouse';

const Menu = css`
  width: 3rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: white;
  border-radius: 50%;
  
  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 5px 2px;
  ${HoverStyle};
`;

export const Image = styled.img`
  width: 50%;
  height: 50%;
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExpandButton = styled.div`
  ${Menu};
  width: 4rem;
  height: 4rem;

  box-shadow: rgba(0, 0, 0, 0.12) 0 3px 5px 2px;
  transition: box-shadow 0.1s ease-in-out 0s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 1px 1px 5px 5px;
  }
`;

export const LinkMenu = styled.div`
  ${Menu};
  position: absolute;
  
  animation-name: slideUp-${({ index }) => index};
  animation-duration: .5s;
  animation-fill-mode: forwards;

  @keyframes slideUp-${({ index }) => index} {
    from { 
      transform: translateY(0);
    }
    to {
      transform: translateY(${({ index }) => -4 * index}rem);
    }
  }
`;
