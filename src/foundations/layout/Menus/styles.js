import styled from 'styled-components';

export const StyledMenus = styled.div`
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

  padding-top: ${({ theme }) => theme.windowHeight * (1.5 / 10)}px;
  padding-left: 10vw;
  box-sizing: border-box;
  
  width: 100%;
  height: ${({ theme }) => theme.windowHeight * (7.5 / 10)}px;
  overflow-y: hidden;
`;

export const InlineMenu = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const NaviText = styled.p`
  margin: 1rem 0;
  font-size: 1.6em;
  max-width: 5rem;
  white-space: nowrap;
  
  color: white;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const SmallNaviText = styled.p`
  margin: 8px 0;
  font-size: 1.0rem;
  padding-left: 1.5rem;
  
  color: white;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.15);
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
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
  }
`;

export const SignImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const Stamp = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  padding-top: 0.1rem;
  padding-left: 0.5rem;
`;
