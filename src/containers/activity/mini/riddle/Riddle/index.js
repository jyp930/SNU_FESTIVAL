import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import HauntedHouseTheme from '@C/activity/mini/riddle/HauntedHouseTheme';
import FullScreen from '@F/FullScreen';
import { theme } from '@S/index';
import AliceOpening from '@I/activity/riddle/alice/alice-opening.png';
import HauntedHouseOpening from '@I/activity/riddle/hounted-house/haunted-house-opening.png';
import AliceTheme from '@C/activity/mini/riddle/AliceTheme';
import * as S from './styles';

function Riddle() {
  const [riddleTheme, setRiddleTheme] = useState(null);

  return (
    <S.StyledRiddle>
      <HeaderContent backgroundColor="transparent" color={theme.palette.PURPLE50}>미궁게임</HeaderContent>
      <S.Body>
        <S.OpeningWrapper>
          <S.Opening onClick={() => setRiddleTheme('Alice')}>
            <S.Image src={AliceOpening} alt="이상한 나라의 앨리스" />
            <S.Title>이상한 나라의 앨리스</S.Title>
          </S.Opening>
          <S.Opening onClick={() => setRiddleTheme('HauntedHouse')}>
            <S.Image src={HauntedHouseOpening} alt="유령의 집" />
            <S.Title>유령의 집</S.Title>
          </S.Opening>
        </S.OpeningWrapper>
        <S.Texts>
          둘 중 하나의 테마를 골라 미궁을 탈출~~
        </S.Texts>
      </S.Body>

      <FullScreen
        isFullScreen={riddleTheme === 'Alice'}
        onCloseFullScreen={() => setRiddleTheme(null)}
        backgroundColor={theme.palette.PINK20}
      >
        <AliceTheme />
      </FullScreen>

      <FullScreen
        isFullScreen={riddleTheme === 'HauntedHouse'}
        onCloseFullScreen={() => setRiddleTheme(null)}
        backgroundColor={theme.palette.PURPLE90}
      >
        <HauntedHouseTheme />
      </FullScreen>
    </S.StyledRiddle>
  );
}
export default Riddle;

Riddle.propTypes = {

};
