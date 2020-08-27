import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import sal from 'sal.js';
import GoodsImage from '@C/goods/GoodsImage';
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
      <GoodsImage img={IU1} top="10vh" left="11vw" delay={100} />
      <GoodsImage img={IU2} top="13vh" left="55vw" delay={150} />
      <GoodsImage img={IU3} top="33vh" left="7vw" delay={200} />
      <GoodsImage img={IU4} top="44vh" left="80vw" delay={250} />
      <GoodsImage img={IU5} top="55vh" left="17vw" delay={300} />
      <GoodsImage img={IU6} top="66vh" left="60vw" delay={350} />
      <GoodsImage img={IU7} top="70vh" left="30vw" delay={400} />
    </S.StyledGoods>
  );
}
export default Goods;

Goods.propTypes = {

};
