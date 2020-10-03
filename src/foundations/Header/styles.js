import styled from 'styled-components';
import { palette, zIndex } from '@S/index';

export const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  z-index: ${zIndex.header};
`;

export const HeaderBarContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const HeaderBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  
  width: 100%;
  height: 28px;
  padding: 15px 20px;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const LogoText = styled.p`
  margin: 0 0 0 5px;
  font-size: 1rem;
  color: ${props => (props.opened ? palette.BLACK_NEWTRO : palette.GRAY_NEWTRO)};
`;

export const MenuButton = styled.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

export const MenuButtonBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${palette.GRAY_NEWTRO};
  margin: 4px 0;
`;

export const OpenedMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${palette.GRAY_NEWTRO};
  opacity: 0.9;
`;

export const NaviButton = styled.div`

`;

export const NaviText = styled.p`
  margin: 20px 0;
  font-size: 2rem;
  color: ${palette.BLACK_NEWTRO};
  cursor: pointer;
  text-shadow: 1px 1px 2px grey;
  transition-duration: 1s;

  &:hover {
    transition-timing-function: cubic-bezier(.175,.885,.32,1);;
    font-size: 3rem;
  }
`;
