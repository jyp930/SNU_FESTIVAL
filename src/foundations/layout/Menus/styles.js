import styled from 'styled-components';

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

export const SignOutButton = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 10vw;
  
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  p {
    font-size: 1rem;
    font-weight: bold;
    color: white;
  }
`;

export const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
