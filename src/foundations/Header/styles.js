import styled from 'styled-components';
import { palette } from '@/static/style';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 20px;
  right: 20px;
  z-index: 100;
  width: 100pv;
  height: auto;
  flex-direction: row;
`;

export const Logo = styled.div`
  display: flex;
  flex-flow: row;
  cursor: pointer;
  color: ${props => (props.opened ? palette.BLACK_NEWTRO : palette.GRAY_NEWTRO)};
`;

export const MenuButton = styled.div`
  display: inline-block;
  cursor: pointer;
  z-index: 9998;
`;

export const MenuButtonBar = styled.div`
  width: 35px;
  height: 5px;
  z-index: 9999;
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
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9998;
  background-color: ${palette.GRAY_NEWTRO};
  opacity: 80%;
`;

export const NaviButton = styled.h2`
  color: ${palette.BLACK_NEWTRO};
  cursor: pointer;
`;
