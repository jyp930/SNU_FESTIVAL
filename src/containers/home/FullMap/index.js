import React from 'react';
import PropTypes from 'prop-types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import SingleCard from '@F/spring/SingleCard';
import IU7 from '@I/jpeg/IU7.jpeg';
import * as S from './styles';

const mainMapText = (
  <S.TextContainer>
    <S.Title>장소 안내</S.Title>
    <S.Description>
      설명설명 블라블라
      <br />
      설명설명 블라블라 설명설명 블라블라
    </S.Description>
    <S.Supplement>자세한 약도는 행사팀, 공연팀 블라블라</S.Supplement>
  </S.TextContainer>
);

function FullMap({ offset, scrollDown }) {
  return (
    <S.StyledFullMap
      onClick={() => scrollDown(offset)}
    >
      <ParallaxLayer
        offset={offset}
        speed={0.5}
      >
        <S.FlexContainer>
          <S.TextFlexItem>
            {mainMapText}
          </S.TextFlexItem>
          <S.ImageFlexItem>
            <SingleCard
              image={IU7}
            />
          </S.ImageFlexItem>
        </S.FlexContainer>
      </ParallaxLayer>
    </S.StyledFullMap>
  );
}
export default FullMap;

FullMap.propTypes = {
  offset: PropTypes.number.isRequired,
  scrollDown: PropTypes.func,
};

FullMap.defaultProps = {
  scrollDown: () => {},
};
