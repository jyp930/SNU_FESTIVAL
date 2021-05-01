import React from 'react';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import GoodsContainer from '@C/goods/Goods';
import ScrollTopButton from '@F/layout/ScrollTopButton';

function Goods() {
  return (
    <>
      <Header />
      <GoodsContainer />
      <ScrollTopButton />
    </>
  );
}
export default withMountEvent(Goods);
