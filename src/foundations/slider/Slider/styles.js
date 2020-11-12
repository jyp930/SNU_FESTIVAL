import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledSlider = styled.div`
  width: 300vw;
  ${media.lessThan('medium')`
    width: 900%;
  `};
  text-align: center;
  display: flex;
  flex-flow: row;
  @media (max-width: 992px) {
    -webkit-animation: 10s linear 0s infinite normal slidemobile;
    animation: 10s linear 0s infinite normal slidemobile;
  }
  -webkit-animation: 20s linear 0s infinite normal slide;
  animation: 20s linear 0s infinite normal slide;
  @-webkit-keyframes slide {
    0% { margin-left: 0%; }
    100% { margin-left: -100vw; }
  };
  @keyframes slide {
    0% { margin-left: 0%; }
    100% {margin-left: -100vw; }
  };
  @-webkit-keyframes slidemobile {
    0% { margin-left: 0%; }
    100% { margin-left: -200vw; }
  };
  @keyframes slidemobile {
    0% { margin-left: 0%; }
    100% {margin-left: -200vw; }
  };
`;
