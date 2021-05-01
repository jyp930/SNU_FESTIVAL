import React from 'react';
import PropTypes from 'prop-types';
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
          <S.Image src={image} alt="굿즈" />
          <div>
            <p>{information.name}</p>
            <p>{information.price}</p>
          </div>
          <div>
            {information.description}
          </div>
        </S.BasicSection>
        <S.Hr />
        <S.Image src={longImage} alt="굿즈" />

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
