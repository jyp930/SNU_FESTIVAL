import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import * as S from './styles';

function FullMap({ parallax, offset }) {
  return (
    <S.StyledFullMap>
      <ParallaxLayer
        offset={offset}
        speed={0.5}
      >
        FullMapContainer
      </ParallaxLayer>
    </S.StyledFullMap>
  );
}
export default FullMap;

FullMap.propTypes = {
  parallax: PropTypes.objectOf(PropTypes.any),
  offset: PropTypes.number.isRequired,
};

FullMap.defaultProps = {
  parallax: null,
};