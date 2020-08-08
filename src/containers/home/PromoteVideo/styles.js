import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/all';
import { palette } from '@/static/style';

const BottomPosition = css`
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

const PreventDrag = css`
  user-select: none;
`;

const IconStyle = css`
  color: ${palette.WHITE_NEWTRO};
  width: 60px;
  height: 60px;
  
  ${media.lessThan('medium')`
    width: 40px;
    height: 40px;
  `};
`;

export const StyledPromoteVideo = styled.div`

`;

export const MainLabel = styled.p`
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
  ${IconStyle};
`;

export const SpeakerOffIcon = styled(GiSpeakerOff)`
  ${IconStyle};
`;

export const ArrowDownButton = styled.div`
  ${BottomPosition};
  
  width: 100%;
  text-align: center;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
