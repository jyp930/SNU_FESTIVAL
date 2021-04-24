import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import * as S from './styles';

function SimpleSlider({ items }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <S.StyledSimpleSlider>
      <Slider {...settings}>
        {items.map((item, i) => (
          <S.Item key={i}>
            {item}
          </S.Item>
        ))}
      </Slider>
    </S.StyledSimpleSlider>
  );
}
export default SimpleSlider;

SimpleSlider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
};
