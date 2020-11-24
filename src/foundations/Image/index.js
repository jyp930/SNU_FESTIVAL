import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { palette } from '@S/index';

function Image({ src, alt }) {
  const [isLoading, setIsLoading] = useState(true);
  const randomColor = useMemo(() => {
    const colors = [
      palette.GREEN_PASTEL, palette.PINK_PASTEL, palette.YELLOW30_PASTEL, palette.BLUE20_PASTEL,
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }, []);

  return (
    <>
      { isLoading && (
        <S.Skeleton
          color={randomColor}
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
};
