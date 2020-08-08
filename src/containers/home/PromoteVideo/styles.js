import styled, { css } from 'styled-components';

const BottomPosition = css`
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

const PreventDrag = css`
  user-select: none;
`;

export const StyledPromoteVideo = styled.div`

`;

export const MainLabel = styled.p`
  ${BottomPosition};
  ${PreventDrag};
  bottom: 50%;
  width: 100%;
  text-align: center;
  
  color: white;
  font-size: 30px;
  opacity: 0.8;
`;

export const SoundButton = styled.button`
  ${BottomPosition};
  ${PreventDrag};
`;

export const ArrowDownButton = styled.div`
  ${BottomPosition};
  ${PreventDrag};
  
  color: white;
  width: 100%;
  text-align: center;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
