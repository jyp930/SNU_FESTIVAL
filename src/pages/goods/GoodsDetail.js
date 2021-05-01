import React from 'react';
import withMountEvent from '@U/hoc/withMountEvent';
import PropTypes from 'prop-types';
import GlassImage from '@I/goods/glass.jpg';
import GlassDetail from '@I/goods/glass-detail.png';
import SealStickerImage from '@I/goods/seal-sticker.png';
import SealStickerDetail from '@I/goods/seal-sticker-detail.png';
import CalendarImage from '@I/goods/calendar.png';
import CalendarDetail from '@I/goods/calendar-detail.png';
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

export const Glass = withMountEvent(() => (
  <GoodsDetail
    formUrl="https://naver.com"
    information={{ name: '축제이즈백 소주잔', price: 7000, description: '한줄설명' }}
    image={GlassImage}
    longImage={GlassDetail}
  />
));

export const SealSticker = withMountEvent(() => (
  <GoodsDetail
    formUrl="https://naver.com"
    information={{ name: '씰스티커', price: 1500, description: '한줄설명' }}
    image={SealStickerImage}
    longImage={SealStickerDetail}
  />
));

export const Calendar = withMountEvent(() => (
  <GoodsDetail
    formUrl="https://naver.com"
    information={{ name: '사계절 엽서 세트', price: 2000, description: '한줄설명' }}
    image={CalendarImage}
    longImage={CalendarDetail}
  />
));
