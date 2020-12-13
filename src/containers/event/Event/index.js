import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import RandomTextShuffle from '@F/text-animation/RandomTextShuffle';
import LottieFrame from '@F/lottie/LottieFrame';
import eventJson from '@I/lottie/event.json';
import Balls from '@F/animation/Balls';

function Event() {
  return (
    <>
      <S.BallsWrapper>
        <Balls />
      </S.BallsWrapper>

      <S.Information>
        <S.Item>
          <RandomTextShuffle
            text="이벤트 기간이 아닙니다 :)"
          />
        </S.Item>
        <S.Item>
          <LottieFrame
            animationJson={eventJson}
          />
        </S.Item>
      </S.Information>

      <S.ThanksToText>
        thanks to @cmiscm
      </S.ThanksToText>
    </>
  );
}
export default Event;

Event.propTypes = {

};
