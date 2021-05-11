import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AliceBackground from '@I/activity/riddle/alice/alice-background.jpg';
import Confetti from '@F/animation/Confetti';
import QuestionBox from '@C/activity/mini/riddle/QuestionBox';

import Alice from '@I/activity/riddle/alice/confetti/alice.svg';
import Bottle from '@I/activity/riddle/alice/confetti/bottle.svg';
import Cake from '@I/activity/riddle/alice/confetti/cake.svg';
import Clock from '@I/activity/riddle/alice/confetti/clock.svg';
import Clover from '@I/activity/riddle/alice/confetti/clover.svg';
import Cookie from '@I/activity/riddle/alice/confetti/cookie.svg';
import Cup from '@I/activity/riddle/alice/confetti/cup.svg';
import Dish from '@I/activity/riddle/alice/confetti/dish.svg';
import Pot from '@I/activity/riddle/alice/confetti/pot.svg';
import Rabbit from '@I/activity/riddle/alice/confetti/rabbit.svg';
import SpaceAce from '@I/activity/riddle/alice/confetti/space-ace.svg';
import HeartAce from '@I/activity/riddle/alice/confetti/heart-ace.svg';
import AliceOne from '@I/activity/riddle/alice/alice-1.png';
import AliceTwo from '@I/activity/riddle/alice/alice-2.png';
import AliceThree from '@I/activity/riddle/alice/alice-3.png';
import { preloadImage } from '@U/functions/preload';
import * as S from './styles';

const svgSet = [
  { src: Alice, weight: 0.5 },
  { src: Bottle, weight: 0.8 },
  { src: Cake, weight: 0.9 },
  { src: Clock, weight: 0.7 },
  { src: Clover, weight: 1.2 },
  { src: Cookie, weight: 0.7 },
  { src: Cup, weight: 0.7 },
  { src: Dish, weight: 0.7 },
  { src: Pot, weight: 0.7 },
  { src: Rabbit, weight: 0.7 },
  { src: SpaceAce, weight: 1.2 },
  { src: HeartAce, weight: 1.2 },
];
const svgs = [...svgSet, ...svgSet];

const answers = [
  '07436abdfc015b3d6e7f6236e4817639b24bfb77e68adfb779ace94e8d08c047',
  '4ea140588150773ce3aace786aeef7f4049ce100fa649c94fbbddb960f1da942',
  'a27db16581bce5f90e4e7d08e10f861d0c6986a01d80babea22f6af4e5774ff1',
];
const hints = [
  '힌트: 7',
  '힌트: 선',
  '힌트: 어린이',
];
const questions = [
  AliceOne,
  AliceTwo,
  AliceThree,
];

function AliceTheme() {
  useEffect(() => {
    [AliceOne, AliceTwo].forEach(preloadImage);
  }, []);

  return (
    <S.StyledAliceTheme>
      <S.Background src={AliceBackground} alt="앨리스 배경" />
      <S.ConfettiWrapper>
        <Confetti svgs={svgs} />
      </S.ConfettiWrapper>
      <QuestionBox questions={questions} answers={answers} hints={hints} />
    </S.StyledAliceTheme>
  );
}
export default AliceTheme;

AliceTheme.propTypes = {

};
