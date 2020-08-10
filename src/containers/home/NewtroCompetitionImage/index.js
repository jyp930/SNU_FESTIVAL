import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import ImageSlider from '@/foundations/spring/ImageSlider';
import IU1 from '@/static/image/jpeg/IU1.jpeg';
import IU4 from '@/static/image/jpeg/IU4.jpeg';
import IU5 from '@/static/image/jpeg/IU5.jpeg';
import IU2 from '@/static/image/jpeg/IU2.jpeg';
import IU3 from '@/static/image/jpeg/IU3.jpeg';
import IU6 from '@/static/image/jpeg/IU6.jpeg';
import IU7 from '@/static/image/jpeg/IU7.jpeg';
import * as S from './styles';

const newtroCompetitionText = (
  <S.TextContainer>
    <S.Title>뉴트로 컨셉 공모전</S.Title>
    <S.Description>
      설명설명 블라블라
      <br />
      설명설명 블라블라 설명설명 블라블라
    </S.Description>
    <S.Supplement>응모 사진 중 5개 작품 선정</S.Supplement>
  </S.TextContainer>
);

function NewtroCompetitionImage({ parallax, offset }) {
  return (
    <S.StyledNewtroCompetitionImage>
      <ParallaxLayer
        offset={offset}
        speed={0.5}
      >
        <S.FlexContainer>
          <S.ImageFlexItem>
            <ImageSlider
              images={[IU1, IU4, IU5, IU2, IU3, IU6, IU7]}
            />
          </S.ImageFlexItem>
          <S.TextFlexItem>
            {newtroCompetitionText}
          </S.TextFlexItem>
        </S.FlexContainer>
      </ParallaxLayer>
    </S.StyledNewtroCompetitionImage>
  );
}
export default NewtroCompetitionImage;

NewtroCompetitionImage.propTypes = {
  parallax: PropTypes.objectOf(PropTypes.any),
  offset: PropTypes.number.isRequired,
};

NewtroCompetitionImage.defaultProps = {
  parallax: null,
};
