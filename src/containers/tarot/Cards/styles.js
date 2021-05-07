import styled from 'styled-components';

export const StyledCards = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`  
  position: absolute;
  width: ${props => props.width}%;
  top: 0;
  left: 0;
  cursor: pointer;

  @keyframes move-${({ index }) => index} {
    0% { transform: ${props => `translate(${props.theme.windowWidth * (props.left / 100)}px, ${props.theme.windowHeight * (props.top / 100)}px)`}; }
    100% { transform: ${props => `translate(${props.theme.windowWidth * (props.translate.left / 100)}px, ${props.theme.windowHeight * (props.translate.top / 100)}px)`}; }
  }

  transform: ${props => `translate(${props.theme.windowWidth * (props.left / 100)}px, ${props.theme.windowHeight * (props.top / 100)}px)`};
  animation-name: move-${({ index }) => index};
  animation-delay: ${({ delay }) => delay}s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;
