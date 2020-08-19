import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import sal from 'sal.js';
import mascot from '@I/svg/mascot-pink.svg';
import IU1 from '@I/jpeg/IU1.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import IU3 from '@I/jpeg/IU3.jpeg';
import IU6 from '@I/jpeg/IU6.jpeg';
import IU7 from '@I/jpeg/IU7.jpeg';
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
      <S.GoodsImage
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="100"
        data-sal-easing="ease-out-back"
        src={IU1}
        alt="IU1"
        top="11vh"
        left="47vw"
      />
      <S.GoodsImage
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="200"
        data-sal-easing="ease-out-back"
        src={IU2}
        alt="IU2"
        top="22vh"
        left="70vw"
      />
      <S.GoodsImage
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="250"
        data-sal-easing="ease-out-back"
        src={IU3}
        alt="IU3"
        top="33vh"
        left="23vw"
      />
      <S.GoodsImage
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="300"
        data-sal-easing="ease-out-back"
        src={IU4}
        alt="IU4"
        top="44vh"
        left="80vw"
      />
      <S.GoodsImage
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="350"
        data-sal-easing="ease-out-back"
        src={IU5}
        alt="IU5"
        top="55vh"
        left="17vw"
      />
      <S.GoodsImage
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="400"
        data-sal-easing="ease-out-back"
        src={IU6}
        alt="IU6"
        top="66vh"
        left="60vw"
      />
      <S.GoodsImage
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="450"
        data-sal-easing="ease-out-back"
        src={IU7}
        alt="IU7"
        top="77vh"
        left="30vw"
      />
    </S.StyledGoods>
  );
}
export default Goods;

Goods.propTypes = {

};
