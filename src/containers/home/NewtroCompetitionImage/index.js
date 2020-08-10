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

function NewtroCompetitionImage({ parallax, offset }) {
  return (
    <S.StyledNewtroCompetitionImage>
      <ParallaxLayer
        offset={offset}
        speed={0.1}
      >
        <S.FlexibleContainer>
          <S.ImageItem>
            문구
          </S.ImageItem>
          <S.ImageItem>
            <ImageSlider
              images={[IU1, IU4, IU5, IU2, IU3, IU6, IU7]}
            />
          </S.ImageItem>
        </S.FlexibleContainer>
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
