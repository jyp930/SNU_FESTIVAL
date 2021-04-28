import React from 'react';
import MiniGameContainer from '@C/activity/mini/home/MiniGame';
import Header from '@F/layout/Header';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

function MiniGame({ theme }) {
  return (
    <>
      <Header hamburgerColor={theme.palette.PURPLE50} />
      <MiniGameContainer theme={theme} />
    </>
  );
}
export default withTheme(MiniGame);

MiniGame.propTypes = {
  theme: PropTypes.shape({
    palette: PropTypes.objectOf(PropTypes.any),
    windowWidth: PropTypes.number,
  }).isRequired,
};
