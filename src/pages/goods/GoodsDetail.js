import React from 'react';
import PropTypes from 'prop-types';
import Poster21Spring from '@I/poster/21spring.png';
import GoodsDetailContainer from '@C/goods/GoodsDetail';
import Header from '@F/layout/Header';

function GoodsDetail({
  formUrl, information, image, longImage,
}) {
  return (
    <>
      <Header />
      <GoodsDetailContainer
        formUrl={formUrl}
        information={information}
        image={image}
        longImage={longImage}
      />
    </>
  );
}
export default GoodsDetail;

GoodsDetail.propTypes = {
  formUrl: PropTypes.string.isRequired,
  information: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
  longImage: PropTypes.string.isRequired,
};

export function Hood() {
  return (
    <GoodsDetail
      formUrl="https://naver.com"
      information={{ name: '축하사 후드티', price: 12000, description: '한줄설명' }}
      image={Poster21Spring}
      longImage={Poster21Spring}
    />
  );
}
