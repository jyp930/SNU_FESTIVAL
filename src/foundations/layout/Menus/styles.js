import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledMenus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  background-image: linear-gradient(
    ${({ theme }) => theme.palette.PURPLE50},
    ${({ theme }) => theme.palette.GREEN80}
  );
  opacity: 0.98;
`;

export const OpenedMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 10%;
  padding-top: 10rem;
  
  ${media.lessThan('medium')`
    padidng-left: 12%;
    padding-top: 20rem;
  `};
  
  height: ${({ theme }) => theme.windowHeight}px;
  opacity: 1;
`;

export const InlineMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 0%;
  padding-top: 0rem;
  opacity: 1;
`;
export const NaviText = styled.p`
  margin: 15px 0;
  font-size: 1.6em;
  
  ${media.lessThan('medium')`
  font-weight: bold;
  `};
  
  color: ${({ theme }) => theme.palette.WHITE};
  cursor: pointer;
  transition-duration: 1s;

  &:hover {
    transition-timing-function: cubic-bezier(.175,.885,.32,1);
    font-size: 2.0rem;
  }
`;

export const SmallNaviText = styled.p`
  margin: 8px 0;
  font-size: 1.0rem;
  padding-left: 1.5rem;
  
  ${media.lessThan('medium')`
  font-weight: bold;
  `};
  
  color: ${({ theme }) => theme.palette.WHITE};
  cursor: pointer;
  transition-duration: 1s;
  
  &:hover {
    transition-timing-function: cubic-bezier(.175,.885,.32,1);
    font-size: 1.5rem;
  }
`;

export const SignButton = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 10vw;
  
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }
`;

export const Image = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
`;
