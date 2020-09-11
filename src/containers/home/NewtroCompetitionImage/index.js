import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import ImageSlider from '@F/spring/ImageSlider';
import IU1 from '@I/jpeg/IU1.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import IU3 from '@I/jpeg/IU3.jpeg';
import IU6 from '@I/jpeg/IU6.jpeg';
import IU7 from '@I/jpeg/IU7.jpeg';
import VisibilitySensor from 'react-visibility-sensor';
import * as S from './styles';

const newtroCompetitionText = (
  <S.TextContainer>
    <VisibilitySensor>
      {({ isVisible }) => (isVisible
        ? <S.Title>뉴트로 컨셉 공모전</S.Title>
        : <S.Title>Lazy Loading 테스트</S.Title>)}
    </VisibilitySensor>
    <S.Description>
      설명설명 블라블라
      <br />
      클릭시 다음으로 블라블라 설명설명 블라블라
    </S.Description>
    <S.Supplement>응모 사진 중 5개 작품 선정</S.Supplement>
  </S.TextContainer>
);

function NewtroCompetitionImage({ offset, scrollDown }) {
  return (
    <S.StyledNewtroCompetitionImage
      onClick={() => scrollDown(offset)}
    >
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
  offset: PropTypes.number.isRequired,
  scrollDown: PropTypes.func,
};

NewtroCompetitionImage.defaultProps = {
  scrollDown: () => {},
};
