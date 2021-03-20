import React, { useState } from 'react';
import tunaVideo from '@I/video/tuna.mp4';
import tunaPoster from '@I/video/poster/tuna.jpg';
import Video from '@F/Video';
import Pulse from 'react-reveal/Pulse';
import * as S from './styles';

const centerContent = (
  <span>
    2021 SNU FESTIVAL
    <br />
    5월에 새로운 모습으로 찾아뵙겠습니다
  </span>
);

function PromoteVideo() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <S.StyledPromoteVideo>
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
    </S.StyledPromoteVideo>
  );
}
export default PromoteVideo;

PromoteVideo.propTypes = {

};
