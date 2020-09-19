import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SNU from '@I/jpeg/SNU.png';
import * as S from './styles';

function Slider() {
  const [d1, setd1] = useState(null);
  const [d2, setd2] = useState(null);
  const [d3, setd3] = useState(null);

  useEffect(() => {
    setd1(document.getElementById('1').offsetWidth);
    setd2(document.getElementById('2').offsetWidth);
    setd3(document.getElementById('3').offsetWidth);
  });

  return (
    <S.StyledSlider width={d1}>
      <S.SliderContents id="1" width={d1} src={SNU} />
      <S.SliderContents id="2" width={d2} src={SNU} />
      <S.SliderContents id="3" width={d3} src={SNU} />
    </S.StyledSlider>
  );
}
export default Slider;

Slider.propTypes = {

};
