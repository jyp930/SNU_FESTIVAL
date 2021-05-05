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
import GuessTheSong from '@I/activity/home/guess-the-song.png';
import Riddle from '@I/activity/home/riddle.png';
import TreasureHunt from '@I/activity/home/treasure-hunt.png';
import BlackAndWhite from '@I/activity/home/black-and-white.png';
import Event from '@I/activity/home/event.png';

import { preloadImage } from '@U/functions/preload';

function Home({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const isLoaded = useMemo(() => theme.windowWidth > 0, [theme.windowWidth]);

  useEffect(() => {
    [Skeleton, FestivalBackground, Poster21SpringCastle, Poster21Spring, Title, Guests,
      GuessTheSong, Riddle, TreasureHunt, BlackAndWhite, Event,
    ].forEach(preloadImage);
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
