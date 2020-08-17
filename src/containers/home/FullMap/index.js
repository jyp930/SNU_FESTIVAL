import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import SingleCard from '@F/spring/SingleCard';
import * as S from './styles';

function FullMap({ parallax, offset }) {
  return (
    <S.StyledFullMap>
      <ParallaxLayer
        offset={offset}
        speed={0.5}
      >
        <S.FlexContainer>
          <S.TextFlexItem>
            지도 설명~~~
          </S.TextFlexItem>
          <S.ImageFlexItem>
            <SingleCard />
          </S.ImageFlexItem>
        </S.FlexContainer>
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