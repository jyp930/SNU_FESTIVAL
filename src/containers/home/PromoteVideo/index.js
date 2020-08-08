import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import bluemingVideo from '@/static/image/video/blueming.mp4';
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
          { isMuted ? <S.SpeakerOffIcon /> : <S.SpeakerIcon /> }
        </S.SoundButton>

        <S.Video id="bluemingVideo" autoPlay loop muted={isMuted}>
          <source src={bluemingVideo} type="video/mp4" />
        </S.Video>
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
