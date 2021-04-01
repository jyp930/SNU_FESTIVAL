import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import HauntedHouseTheme from '@C/activity/mini/riddle/HauntedHouseTheme';
import FullScreen from '@F/FullScreen';
import { theme } from '@S/index';
import * as S from './styles';

function Riddle() {
  const [riddleTheme, setRiddleTheme] = useState(null);

  return (
    <S.StyledRiddle>
      <HeaderContent>미궁게임</HeaderContent>
      <S.Body>
        <button onClick={() => setRiddleTheme('HauntedHouse')}>테마 1</button>
        <button onClick={() => setRiddleTheme('HauntedHouse')}>테마 2</button>
      </S.Body>

      <FullScreen
        isFullScreen={riddleTheme === 'HauntedHouse'}
        onCloseFullScreen={() => setRiddleTheme(null)}
        backgroundColor={theme.palette.PURPLE20}
      >
        <HauntedHouseTheme />
      </FullScreen>

    </S.StyledRiddle>
  );
}
export default Riddle;

Riddle.propTypes = {

};
