import styled from 'styled-components';
import { palette } from '@/static/style';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  width: 100%;
  height: auto;
  z-index: 0;
  flex-direction: row;
`;

export const MenuButton = styled.div`
  display: inline-block;
  cursor: pointer;
  z-index: 2
`;

export const MenuButtonBar = styled.div`
  width: 35px;
  height: 5px;
  z-index: 10000;
  color: ${props => (props.opened ? palette.WHITE20_NEWTRO : palette.BLACK_NEWTRO)};
  margin: 6px 0;
`;

export const OpenedMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${palette.BLACK_NEWTRO};
  z-index: 9999;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
