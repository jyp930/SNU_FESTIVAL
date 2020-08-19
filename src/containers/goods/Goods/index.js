import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import sal from 'sal.js';
import mascot from '@I/svg/mascot-pink.svg';
import * as S from './styles';

function Goods() {
  useEffect(() => {
    sal();
  }, []);

  return (
    <S.StyledGoods>
      <S.BackgroundImage />
      <S.GoodsMainImage
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="1000"
        data-sal-easing="ease-out-back"
        src={mascot}
        alt="mascot"
      />
    </S.StyledGoods>
  );
}
export default Goods;

Goods.propTypes = {

};
