import styled from 'styled-components';
import { palette } from '@S/index';

const zIndex = {
  base: 1,
  header: 9999,
};

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: ${zIndex.header};
  height: auto;
  flex-direction: row;
`;

export const Logo = styled.div`
  cursor: pointer;
  color: ${props => (props.opened ? palette.BLACK_NEWTRO : palette.GRAY_NEWTRO)};
`;

export const MenuButton = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export const MenuButtonBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: ${props => (props.opened ? palette.BLACK_NEWTRO : palette.GRAY_NEWTRO)};
  margin: 6px 0;
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
  opacity: 80%;
`;

export const NaviButton = styled.h2`
  color: ${palette.BLACK_NEWTRO};
  cursor: pointer;
`;
