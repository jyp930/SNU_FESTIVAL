import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function Video({ isMuted, video, poster }) {
  return (
    <S.Video autoPlay playsInline loop muted={isMuted} poster={poster}>
      <source src={video} type="video/mp4" />
    </S.Video>
  );
}
export default Video;

Video.propTypes = {
  isMuted: PropTypes.bool,
  video: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

Video.defaultProps = {
  isMuted: true,
  poster: null,
};
