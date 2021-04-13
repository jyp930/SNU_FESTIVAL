import React from 'react';
import PropTypes from 'prop-types';
import GreetingText from '@I/introduction/greeting-text.png';
import GreetingTextSmall from '@I/introduction/greeting-text-small.png';
import StaffText from '@I/introduction/staff-text.png';
import StaffTextSmall from '@I/introduction/staff-text-small.png';
import Fade from 'react-reveal/Fade';
import * as S from './styles';

function Greeting({ isMobile }) {
  return (
    <S.StyledGreeting>
      <S.TopText>
        <p>축하사란?</p>
        <div />
      </S.TopText>
      <S.Images>
        <Fade left delay={100}>
          <img src={isMobile ? GreetingTextSmall : GreetingText} alt="안녕하세요 축하사입니다." />
        </Fade>
        <Fade right distance="100px" delay={200}>
          <img src={isMobile ? StaffTextSmall : StaffText} alt="축하사" />
        </Fade>
      </S.Images>
    </S.StyledGreeting>
  );
}
export default Greeting;

Greeting.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
