import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import bluemingVideo from '@I/video/blueming.mp4';
import Video from '@F/Video';
import LoopKeyFrame from '@F/spring/LoopKeyFrame';
import * as S from './styles';

const centerContent = (
  <span>
    2020 SNU FESTIVAL
    <br />
    ON-AIR
  </span>
);

const ArrowDownContent = (
  <>
    <div>축제 구경하기</div>
    <div><S.ArrowDownIcon /></div>
  </>
);

const ArrowDownStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

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

        {/* TODO: 살리기 */}
        {/*<S.ArrowDownButtonWrapper>*/}
        {/*  <S.ArrowDownButton*/}
        {/*    onClick={() => scrollDown(offset)}*/}
        {/*  >*/}
        {/*    <LoopKeyFrame*/}
        {/*      start={{ transform: 'translate3d(0, 0, 0)' }}*/}
        {/*      end={{ transform: 'translate3d(0, -10px, 0)' }}*/}
        {/*      duration={500}*/}
        {/*      customStyle={ArrowDownStyle}*/}
        {/*    >*/}
        {/*      { ArrowDownContent }*/}
        {/*    </LoopKeyFrame>*/}
        {/*  </S.ArrowDownButton>*/}
        {/*</S.ArrowDownButtonWrapper>*/}

        <S.SoundButton
          onClick={() => setIsMuted(state => !state)}
        >
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
  offset: PropTypes.number.isRequired,
  scrollDown: PropTypes.func,
};

PromoteVideo.defaultProps = {
  scrollDown: () => {},
};
