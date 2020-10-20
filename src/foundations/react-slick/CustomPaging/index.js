import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import * as S from './styles';

function CustomPaging({ items, initialIndex }) {
  const settings = {
    dots: true,
    initialSlide: initialIndex,
    customPaging: (index) => (
      <S.Preview><S.Image src={items[index]} /></S.Preview>
    ),
  };
  return (
    <S.StyledCustomPaging>
      <Slider {...settings}>
        { items.map(image => (
          <S.Item key={image}>
            <S.Image src={image} alt="IMAGE" />
          </S.Item>
        ))}
      </Slider>
    </S.StyledCustomPaging>
  );
}
export default CustomPaging;

CustomPaging.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  initialIndex: PropTypes.number,
};

CustomPaging.defaultProps = {
  initialIndex: 0,
};
