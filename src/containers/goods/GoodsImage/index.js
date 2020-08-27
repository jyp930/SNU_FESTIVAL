import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function GoodsImage({
  img, delay, top, left,
}) {
  return (
    <S.ImageWrapper
      top={top}
      left={left}
      data-sal="fade"
      data-sal-duration="2000"
      data-sal-delay={delay}
      data-sal-easing="ease-out-back"
    >
      <S.StyledGoodsImage src={img} alt={img} />
    </S.ImageWrapper>
  );
}
export default GoodsImage;

GoodsImage.propTypes = {
  img: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
};
