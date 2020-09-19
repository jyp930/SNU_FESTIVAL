import styled from 'styled-components';

export const StyledSlider = styled.div`
  width: ${props => props.width * 3}px;
  text-align: center;
  display: flex;
  flex-flow: row;
  &::-webkit-scrollbar { display: none !important; };
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-animation: 5s linear 0s infinite normal slide;
  animation: 5s linear 0s infinite normal slide;
  
  @-webkit-keyframes slide {
    0% { margin-left: 0%; }
    100% { margin-left: -${props => props.width}px; }
  };
  @keyframes slide {
    0% { margin-left: 0%; }
    100% { margin-left: -${props => props.width}px; }
  };
`;

export const SliderContents = styled.img`
  width: ${props => props.width}px ;
`;
