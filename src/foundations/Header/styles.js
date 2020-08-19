import styled from 'styled-components';
import { palette, zIndex } from '@S/index';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 20px;
  z-index: ${zIndex.header};
  height: auto;
  flex-direction: row;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.opened ? palette.BLACK_NEWTRO : palette.GRAY_NEWTRO)};
`;

export const MenuButton = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export const MenuButtonBar = styled.div`
  width: 28px;
  height: 4px;
  background-color: ${props => (props.opened ? palette.BLACK_NEWTRO : palette.GRAY_NEWTRO)};
  margin: 4px 0;
`;

export const OpenedMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${zIndex.header};
  background-color: ${palette.GRAY_NEWTRO};
  opacity: 0.9;
`;

export const NaviButton = styled.p`
  margin: 20px 0;
  font-size: 2rem;
  color: ${palette.BLACK_NEWTRO};
  cursor: pointer;
`;
