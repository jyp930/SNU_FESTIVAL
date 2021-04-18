import React from 'react';
import PropTypes from 'prop-types';
import Window from '@I/goods/window.png';
import { HeaderContent } from '@F/layout/Header';
import * as S from './styles';

function GoodsDetail({
  formUrl, information, image, longImage,
}) {
  return (
    <S.StyledGoodsDetail>
      <HeaderContent>굿즈</HeaderContent>
      <S.Body>
        <S.BasicSection>
          <S.Image src={Window} alt="굿즈" />
          <div>
            <p>축하사 후드티</p>
            <p>12000</p>
          </div>
          <div>
            한줄설명
          </div>
        </S.BasicSection>
        <S.Hr />
        <S.Image src={Window} alt="굿즈" />

        <S.Button>굿즈 신청하러 가기</S.Button>
      </S.Body>
    </S.StyledGoodsDetail>
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
