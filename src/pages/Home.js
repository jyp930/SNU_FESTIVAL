import React, { useEffect, useMemo } from 'react';
import HomeContainer from '@C/home/Home';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import MobileHomeContainer from '@C/home/MobileHome';
import FestivalBackground from '@I/introduction/festival-background.jpg';
import Poster21SpringCastle from '@I/poster/21springCastle.png';
import Poster21Spring from '@I/poster/21spring.png';
import Skeleton from '@I/skeleton/skeleton.png';
import Title from '@I/activity/radio/title.png';
import Guests from '@I/activity/radio/guests.png';

import { preloadImage } from '@U/functions/preload';

function Home({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const isLoaded = useMemo(() => theme.windowWidth > 0, [theme.windowWidth]);

  useEffect(() => {
    [Skeleton, FestivalBackground, Poster21SpringCastle, Poster21Spring, Title, Guests].forEach(preloadImage);
  }, []);

  return (
    <>
      <Header hamburgerColor={theme.palette.PURPLE50} />
      {isLoaded && !isMobile && <HomeContainer theme={theme} />}
      {isLoaded && isMobile && <MobileHomeContainer theme={theme} />}
    </>
  );
}
export default withMountEvent(withTheme(Home));

Home.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.objectOf(PropTypes.any),
    windowWidth: PropTypes.number,
  }).isRequired,
};
