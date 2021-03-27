import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { startAnimation } from '../functions';
import { basePropTypes } from '../values';

Lyrics.propTypes = {
  ...basePropTypes,
  lyrics: PropTypes.string.isRequired,
};

function Lyrics({ trigger, dispatch, lyrics }) {
  useEffect(() => {
    lyricsText = document.querySelector('.Lyrics');
  }, []);

  useEffect(() => {
    if (trigger) {
      startAnimation(lyricsText, cancelAnimation, 1000);
      dispatch({ type: 'toggle', key: 'triggerLyrics' });
    }
  }, [trigger]);

  return (
    <S.StyledLyrics
      className="Lyrics"
    >
      {lyrics}
    </S.StyledLyrics>
  );
}
export default React.memo(Lyrics);

let lyricsText = null;
let cancelAnimation = { listener: null };
