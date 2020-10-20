import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import { centerStore } from '@/mob-x/center';
import * as S from './styles';

function PictureGrid({ images, onClickImage }) {
  const setCenterComponent = useCallback((text) => {
    centerStore.setCenterComponent(<S.CenterText>{text}</S.CenterText>);
  }, []);

  return (
    <S.StyledPictureGrid>
      { images.map((image, index) => (
        <S.Picture
          onMouseEnter={() => setCenterComponent(`2020 가을${index} 단체게임`)}
          onMouseLeave={() => setCenterComponent(null)}
          onClick={() => onClickImage(index)}
          key={index}
        >
          <Slide
            left={index % 2 === 0}
            right={index % 2 === 1}
            duration={800}
            delay={index * 20}
          >
            <S.Image src={image} alt="IMAGE" />
          </Slide>
        </S.Picture>
      ))}
    </S.StyledPictureGrid>
  );
}
export default PictureGrid;

PictureGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickImage: PropTypes.func.isRequired,
};
