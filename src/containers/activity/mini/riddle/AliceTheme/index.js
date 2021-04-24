import React from 'react';
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

function AliceTheme() {
  return (
    <S.StyledAliceTheme>
      <S.Background src={AliceBackground} alt="앨리스 배경" />
      <S.ConfettiWrapper>
        <Confetti svgs={svgs} />
      </S.ConfettiWrapper>
      <QuestionBox />
    </S.StyledAliceTheme>
  );
}
export default AliceTheme;

AliceTheme.propTypes = {

};
