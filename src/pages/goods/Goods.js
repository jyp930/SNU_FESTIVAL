import React from 'react';
import withMountEvent from '@U/hoc/withMountEvent';
import Header from '@F/layout/Header';
import GoodsContainer from '@C/goods/Goods';

function Goods() {
  return (
    <>
      <Header />
      <GoodsContainer />
    </>
  );
}
export default withMountEvent(Goods);
