import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import BasicCard from '@F/card/BasicCard';
import * as S from './styles';

function CustomPaging({ items, initialIndex }) {
  const settings = {
    dots: true,
    initialSlide: initialIndex,
    customPaging: (index) => (
      // eslint-disable-next-line react/prop-types
      <S.Preview><S.Image src={items[index].image} /></S.Preview>
    ),
  };
  return (
    <S.StyledCustomPaging>
      <Slider {...settings}>
        { items.map(item => (
          <S.Item key={item}>
            <BasicCard
              image={item.image}
              content={<>{item.description}</>}
            />
          </S.Item>
        ))}
      </Slider>
    </S.StyledCustomPaging>
  );
}
export default CustomPaging;

CustomPaging.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  initialIndex: PropTypes.number,
};

CustomPaging.defaultProps = {
  initialIndex: 0,
};
