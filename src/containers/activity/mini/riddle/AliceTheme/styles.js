import styled from 'styled-components';
import { FlexCenterStyle } from '@S/responsive/display';
import media from 'styled-media-query';
import { rgba } from 'polished';

export const StyledAliceTheme = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle};
  
  @keyframes background {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  opacity: 0;
  animation-name: background;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-delay: 1s;
`;

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ConfettiWrapper = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.base};
`;

export const Content = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.base};
  
  ${media.lessThan('medium')`
    width: 80%;
  `};
`;

export const Question = styled.div`
  ${FlexCenterStyle};
  background-color: #f5f6ff;
  width: 100%;
  height: 100%;
  max-width: 550px;
  max-height: 550px;
  border-radius: 15px;
  
  ${media.lessThan('medium')`
    width: 80vw;
    height: 80vw;
  `};
`;

export const Answer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  margin-top: 2rem;
`;

export const InputBox = styled.input`
  outline: 0;
  width: 80%;
  height: 100%;
  padding: 10px 8px;
  border-radius: 13px;
  border: solid 1px #ffffff;
  background-color: rgba(255, 255, 255, 0.31);

  color: ${({ theme }) => theme.palette.GRAY80};
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  
  &::placeholder {
    color: ${({ theme }) => rgba(theme.palette.GRAY80, 0.4)};
  }
  
  margin-right: 1rem;
`;

export const Button = styled.div`
  ${FlexCenterStyle};
  width: 20%;
  height: 100%;
  background-color: white;
  padding: 10px 0;
  border-radius: 13px;
  
  color: ${({ theme }) => theme.palette.PURPLE70};
  font-weight: bold;
  
  cursor: pointer;
`;
