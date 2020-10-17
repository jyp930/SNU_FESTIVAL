import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import IU1 from '@I/jpeg/IU1.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import * as S from './styles';

const images = [IU1, IU4, IU5];

function CustomPaging() {
  const settings = {
    dots: true,
    customPaging: (index) => (
      <S.Preview><S.Image src={images[index]} /></S.Preview>
    ),
  };
  return (
    <S.StyledCustomPaging>
      <Slider {...settings}>
        { images.map(image => (
          <S.Item>
            <S.Image src={image} alt="IMAGE" />
          </S.Item>
        ))}
      </Slider>
    </S.StyledCustomPaging>
  );
}
export default CustomPaging;

CustomPaging.propTypes = {

};
