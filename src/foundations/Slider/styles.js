import styled from 'styled-components';

export const StyledSlider = styled.div`
  width: 100%;
  height: 300px;
  overscroll-behavior: none;

  -webkit-animation: 5s linear 0s infinite normal slide;
  animation: 5s linear 0s infinite normal slide;
  
  @-webkit-keyframes slide {
    0% { margin-left: 1%; }
    100% { margin-left: -100%; }
  };
  @keyframes slide {
    0% { margin-left: 1%; }
    100% { margin-left: -100%; }
  };
`;
