import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import tunaVideo from '@I/video/tuna.mp4';
import tunaPoster from '@I/video/poster/tuna.jpg';
import Video from '@F/Video';
import Pulse from 'react-reveal/Pulse';
import * as S from './styles';

const centerContent = (
  <span>
    2020 SNU FESTIVAL
    <br />
    축 하 사 모 집 중
  </span>
);

function PromoteVideo({ offset, scrollDown }) {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <S.StyledPromoteVideo>
      <ParallaxLayer
        offset={offset}
        speed={0.5}
      >
        <S.CenterLabel>
          {centerContent}
        </S.CenterLabel>

        <S.SoundButton
          onClick={() => setIsMuted(state => !state)}
        >
          <Pulse forever>
            { isMuted ? <S.SpeakerOffIcon /> : <S.SpeakerIcon /> }
          </Pulse>
        </S.SoundButton>

        <Video
          video={tunaVideo}
          poster={tunaPoster}
          isMuted={isMuted}
        />
      </ParallaxLayer>
    </S.StyledPromoteVideo>
  );
}
export default PromoteVideo;

PromoteVideo.propTypes = {
  offset: PropTypes.number.isRequired,
  scrollDown: PropTypes.func,
};

PromoteVideo.defaultProps = {
  scrollDown: () => {},
};
