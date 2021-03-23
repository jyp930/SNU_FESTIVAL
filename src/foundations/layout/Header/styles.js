import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { HoverStyle } from '@S/responsive/mouse';

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  z-index: ${({ theme }) => theme.zIndex.header};
`;

export const HeaderBarContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.header + 1};
  
  ${props => props.isOpen && css`
    pointer-events: none;
  `};
`;

export const HeaderBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 65px;
  padding: 15px 20px;
  box-sizing: border-box;
`;

export const Logo = styled.div`  
  display: flex;
  align-items: center;
  cursor: pointer;
  ${HoverStyle};
`;

export const LogoImage = styled.img`
  width: 5rem;
  height: auto;
`;

export const MenuButton = styled.div`
  --width: 35px;
  ${media.lessThan('medium')`
    --width: 28px;
  `};
  
  width: var(--width);
  height: var(--width);
  cursor: pointer;
  ${HoverStyle};
`;

export const MenuButtonBar = styled.div`
  width: ${props => props.width};
  height: 0;
  box-sizing: border-box;
  border: solid 1px #ffffff;
  border-radius: 5px;
  margin: calc(var(--width) / 7) 0;
  margin-left: auto;
`;

export const OpenedMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  background-color: ${({ theme }) => theme.palette.GRAY_NEWTRO};
  opacity: 0.9;
`;

export const NaviText = styled.p`
  margin: 20px 0;
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.BLACK_NEWTRO};
  cursor: pointer;
  text-shadow: 1px 1px 2px grey;
  transition-duration: 1s;

  &:hover {
    transition-timing-function: cubic-bezier(.175,.885,.32,1);
    font-size: 3rem;
  }
`;
