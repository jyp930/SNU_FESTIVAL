import React from 'react';
import bluemingVideo from '@I/video/blueming.mp4';
import bluemingPoster from '@I/video/poster/blueming.png';
import Video from './index';

export default {
  title: 'foundations/Video',
};

export const Default = () => (
  <Video
    video={bluemingVideo}
    poster={bluemingPoster}
  />
);
