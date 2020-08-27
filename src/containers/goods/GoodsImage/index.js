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
      <S.StyledGoodsImage src={img} alt="고릴라리온" />
    </S.ImageWrapper>
  );
}
export default GoodsImage;

GoodsImage.propTypes = {
  img: PropTypes.string.isRequired,
  delay: PropTypes.number,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
};

GoodsImage.defaultProps = {
  delay: 800,
};
