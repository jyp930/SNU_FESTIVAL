import React from 'react';
import notFoundPageJson from '@/static/image/lottie/404.json';
import LottieFrame from './index';

export default {
  title: 'foundations/lottie/LottieFrame',
};

export const Default = () => <LottieFrame animationJson={notFoundPageJson} />;
