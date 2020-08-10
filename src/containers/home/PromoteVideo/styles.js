import styled, { css } from 'styled-components';
import { GiSpeaker, GiSpeakerOff, IoIosArrowDown } from 'react-icons/all';
import { palette } from '@S/index';
import { ResponsiveIconStyle, ResponsiveTextStyle } from '@S/responsive';

const ResponsiveIconStyleWithColor = css`
  ${ResponsiveIconStyle};
  color: ${palette.WHITE_NEWTRO};
`;

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

export const CenterLabel = styled.p`
  ${BottomPosition};
  ${PreventDrag};
  bottom: 50%;
  width: 100%;
  text-align: center;
  
  color: ${palette.GRAY_NEWTRO};
  font-size: 30px;
  opacity: 0.8;
`;

export const SoundButton = styled.div`
  ${BottomPosition};
  cursor: pointer;
`;

export const SpeakerIcon = styled(GiSpeaker)`
  ${ResponsiveIconStyleWithColor};
`;

export const SpeakerOffIcon = styled(GiSpeakerOff)`
  ${ResponsiveIconStyleWithColor};
`;

export const ArrowDownIcon = styled(IoIosArrowDown)`
  ${ResponsiveIconStyleWithColor};
`;

export const ArrowDownButtonWrapper = styled.div`
  ${BottomPosition};
  display: flex;

  width: 100%;
`;

export const ArrowDownButton = styled.div`
  margin: 0 auto;

  ${PreventDrag};
  cursor: pointer;
  
  ${ResponsiveTextStyle};
  color: ${palette.WHITE_NEWTRO};
`;
