import styled from 'styled-components';

export const StyledTypingTextTransition = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  font-family: 'Rubik Mono One', sans-serif;
  //background-color: #22292C;
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 0;
`;

export const Text = styled.p`
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  position: absolute;
  margin: 0;
  z-index: 1;
  span {
  position: absolute;
}
`;

export const Offscreentext = styled.p`
  width: 100%;
  transform: translateY(-50%);
  display: block;
  position: absolute;
  margin: 0;
  text-align: center;
  top: -9999px;
`;