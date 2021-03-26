import styled from 'styled-components';
import media from 'styled-media-query';
import { HoverStyle } from '@S/responsive/mouse';
import '@/static/font/font.css';

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
`;

export const LogoImage = styled.img`
  width: 5rem;
  height: auto;
  cursor: pointer;
  ${HoverStyle};
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

export const BasicText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  
  p {
    margin: 0;
    color: white;
    
    &:first-child {
      font-size: 12px;
    }
    
    &:last-child {
      font-size: 14px;
      font-family: 'PFStardust', sans-serif;
      line-height: 1.2;
    }
  }
`;
