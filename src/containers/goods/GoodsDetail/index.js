import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Image from '@F/Image';
import { EventBehavior } from '@U/initializer/googleAnalytics';
import * as S from './styles';

function GoodsDetail({
  information, image, longImage,
}) {
  const goToForm = () => {
    EventBehavior('Goods', 'Click Goods Form', 'Click Goods Form');
    window.open('https://forms.gle/AwDogQChMh9sZN6T7', '_blank');
  };

  return (
    <S.StyledGoodsDetail>
      <HeaderContent>굿즈</HeaderContent>
      <S.Body>
        <S.BasicSection>
          <S.Image><Image src={image} alt="굿즈" /></S.Image>
          <div>
            <p>{information.name}</p>
            <p>{information.price}</p>
          </div>
        </S.BasicSection>
        <S.Hr />
        <S.Image><Image src={longImage} alt="굿즈" /></S.Image>

        <S.Button onClick={goToForm}>굿즈 신청하러 가기</S.Button>
      </S.Body>
    </S.StyledGoodsDetail>
  );
}
export default GoodsDetail;

GoodsDetail.propTypes = {
  information: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  image: PropTypes.string.isRequired,
  longImage: PropTypes.string.isRequired,
};
