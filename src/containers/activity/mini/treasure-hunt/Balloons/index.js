import React from 'react';
import PropTypes from 'prop-types';
import RedBalloon from '@I/activity/treasure-hunt/balloon-red.png';
import GreenBalloon from '@I/activity/treasure-hunt/balloon-green.png';
import PurpleBalloon from '@I/activity/treasure-hunt/balloon-purple.png';
import * as S from './styles';

function Balloons() {
  return (
    <S.Balloons>
      <S.Balloon src={RedBalloon} alt="" top={25} left={5} index={1} duration={2} />
      <S.Balloon src={GreenBalloon} alt="" top={40} left={40} index={2} duration={3} />
      <S.Balloon src={PurpleBalloon} alt="" top={10} right={15} index={3} duration={2.5} />
    </S.Balloons>
  );
}
export default Balloons;

Balloons.propTypes = {

};
