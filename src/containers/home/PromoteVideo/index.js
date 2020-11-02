import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import bluemingVideo from '@I/video/blueming.mp4';
import bluemingPoster from '@I/video/poster/blueming.png';
import Video from '@F/Video';
import * as S from './styles';

const centerContent = (
  <span>
    2020 SNU FESTIVAL
    <br />
    ON-AIR
  </span>
);

function PromoteVideo({ offset, scrollDown }) {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <S.StyledPromoteVideo>
      <ParallaxLayer
        offset={offset}
        speed={0.1}
      >
        <S.CenterLabel>
          {centerContent}
        </S.CenterLabel>

        <S.SoundButton
          onClick={() => setIsMuted(state => !state)}
        >
          { isMuted ? <S.SpeakerOffIcon /> : <S.SpeakerIcon /> }
        </S.SoundButton>

        <Video
          video={bluemingVideo}
          poster={bluemingPoster}
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
