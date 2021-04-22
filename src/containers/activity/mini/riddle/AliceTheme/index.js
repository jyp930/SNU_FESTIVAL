import React from 'react';
import PropTypes from 'prop-types';
import AliceBackground from '@I/activity/riddle/alice/alice-background.jpg';
import * as S from './styles';

function AliceTheme() {
  return (
    <S.StyledAliceTheme>
      <S.Background src={AliceBackground} alt="앨리스 배경" />
    </S.StyledAliceTheme>
  );
}
export default AliceTheme;

AliceTheme.propTypes = {

};
