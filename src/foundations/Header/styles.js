import styled from 'styled-components';
import { palette } from '@/static/style';

export const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  left: 20px;
  right: 20px;
  width: 100pv;
  height: auto;
  z-index: 100;
  flex-direction: row;
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
  background-color: ${props => (props.opened ? palette.WHITE20_NEWTRO : palette.BLACK_NEWTRO)};
  margin: 6px 0;
`;

export const OpenedMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${palette.LIGHT_BLUE_NEWTRO};
  z-index: 9998;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
