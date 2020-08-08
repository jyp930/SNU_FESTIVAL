import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import bluemingVideo from '@/static/image/video/blueming.mp4';
import Video from '@/foundations/Video';
import LoopKeyFrame from '@/foundations/spring/LoopKeyFrame';
import * as S from './styles';

const mainLabel = (
  <span>
    2020 SNU FESTIVAL
    <br />
    ON-AIR
  </span>
);

function PromoteVideo({ parallax, offset }) {
  const [isMuted, setIsMuted] = useState(true);

  const scrollDown = useCallback(() => {
    parallax.scrollTo(offset + 1);
  }, [parallax, offset]);

  return (
    <S.StyledPromoteVideo>
      <ParallaxLayer
        offset={offset}
        speed={0.1}
      >
        <S.MainLabel>{mainLabel}</S.MainLabel>

        <S.ArrowDownButton>
          <button onClick={scrollDown}>아래로</button>
        </S.ArrowDownButton>

        <S.SoundButton onClick={() => setIsMuted(!isMuted)}>
          <LoopKeyFrame
            start={{ opacity: 0.6 }}
            end={{ opacity: 1 }}
            delay={1000}
          >
            { isMuted ? <S.SpeakerOffIcon /> : <S.SpeakerIcon /> }
          </LoopKeyFrame>
        </S.SoundButton>

        <Video
          video={bluemingVideo}
          isMuted={isMuted}
        />
      </ParallaxLayer>
    </S.StyledPromoteVideo>
  );
}
export default PromoteVideo;

PromoteVideo.propTypes = {
  parallax: PropTypes.objectOf(PropTypes.any),
  offset: PropTypes.number.isRequired,
};

PromoteVideo.defaultProps = {
  parallax: null,
};
