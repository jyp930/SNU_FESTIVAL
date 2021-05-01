import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from '@I/skeleton/skeleton.png';
import * as S from './styles';

function Image({ src, alt, circle }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      { isLoading && (
        <S.Skeleton
          src={Skeleton}
          alt=""
          circle={circle}
        />
      )}
      <S.Image
        src={src}
        alt={alt}
        isLoading={isLoading}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}
export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  circle: PropTypes.bool,
};

Image.defaultProps = {
  circle: false,
};
