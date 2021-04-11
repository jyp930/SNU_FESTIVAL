import React from 'react';
import PropTypes from 'prop-types';
import GreetingText from '@I/introduction/greeting-text.svg';
import StaffText from '@I/introduction/staff-text.svg';
import Fade from 'react-reveal/Fade';
import * as S from './styles';

function Greeting() {
  return (
    <S.StyledGreeting>
      <S.TopText>
        <p>축하사란?</p>
        <div />
      </S.TopText>
      <S.Images>
        <Fade left delay={100}>
          <img src={GreetingText} alt="안녕하세요 축하사입니다." />
        </Fade>
        <Fade right distance="100px" delay={200}>
          <img src={StaffText} alt="축하사" />
        </Fade>
      </S.Images>
    </S.StyledGreeting>
  );
}
export default Greeting;

Greeting.propTypes = {

};
