import React from 'react';
import styled from 'styled-components';
import RandomTextShuffle from '@F/text-animation/RandomTextShuffle';
import eventJson from '@I/lottie/event.json';
import LottieFrame from '@F/lottie/LottieFrame';

function Event() {
  return (
    <Wrapper>
      <Item>
        <RandomTextShuffle
          text="이벤트 기간이 아닙니다 :)"
        />
      </Item>
      <Item>
        <LottieFrame
          animationJson={eventJson}
          width={280}
          height={280}
        />
      </Item>
    </Wrapper>
  );
}
export default Event;

const Wrapper = styled.div`
  margin: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  margin: 1rem 0;
`;
