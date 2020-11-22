import styled from 'styled-components';
import media from 'styled-media-query';

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  ::-webkit-scrollbar { display: none; }
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const StyledSlider = styled.div`
  height: 100%;
  display: flex;

  // 부모 컴포넌트와 width sync 맞추기
  width: 150vw;
  animation: 20s linear 0s infinite slide;
  @keyframes slide {
    0% { margin-left: 0; }
    100% {margin-left: -150vw; }
  };
  
  ${media.lessThan('medium')`
    width: 400vw;
    animation: 15s linear 0s infinite slideMobile; 
    @keyframes slideMobile {
      0% { margin-left: 0; }
      100% {margin-left: -400vw; }
    };
  `};
`;
