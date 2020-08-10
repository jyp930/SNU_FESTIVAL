import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-spring/renderprops-universal';
import { config } from 'react-spring';
import * as S from './styles';

function ImageSlider({ images, customStyle, duration }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [toggleImage, setToggleImage] = useState(false);

  const showNextImage = useCallback(() => {
    setImageIndex(state => (state + 1) % images.length);
  }, [images]);

  const nextImageByClick = useCallback(() => {
    showNextImage();
    setToggleImage(state => !state);
  }, [showNextImage]);

  useEffect(() => {
    const nextSlide = setInterval(() => {
      showNextImage();
    }, 2000 + duration);

    return () => clearInterval(nextSlide);
  }, [showNextImage, toggleImage]);

  return (
    images.map((image, index) => (
      (index === imageIndex)
      && (
        <Transition
          items={image}
          from={{ position: 'relative', opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ duration, ...config.molasses }}
          key={image}
        >
          {item => props => (
            <S.StyledImageSlider style={{ ...props, ...customStyle }} onClick={nextImageByClick}>
              <S.Image src={image} alt="" />
            </S.StyledImageSlider>
          )}
        </Transition>
      )
    ))
  );
}
export default ImageSlider;

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  customStyle: PropTypes.objectOf(PropTypes.any),
  duration: PropTypes.number,
};

ImageSlider.defaultProps = {
  customStyle: {},
  duration: 800,
};
