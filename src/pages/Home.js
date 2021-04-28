import React, { useMemo } from 'react';
import HomeContainer from '@C/home/Home';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import MobileHomeContainer from '@C/home/MobileHome';

function Home({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);

  return (
    <>
      <Header hamburgerColor={theme.palette.PURPLE50} />
      {!isMobile && <HomeContainer theme={theme} />}
      {isMobile && <MobileHomeContainer theme={theme} />}
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
