import React, { useEffect } from 'react';
import IU1 from '@I/jpeg/IU1.jpeg';
import { StyledGoods } from '@C/goods/Goods/styles';
import sal from 'sal.js';
import GoodsImage from './index';

export default {
  title: 'containers/goods/GoodsImage',
};

function GoodsImageTest() {
  useEffect(() => {
    sal();
  }, []);

  return (
    <StyledGoods>
      <GoodsImage
        img={IU1}
        top="1vh"
        left="1vw"
      />
    </StyledGoods>
  );
}

export const Default = () => <GoodsImageTest />;
