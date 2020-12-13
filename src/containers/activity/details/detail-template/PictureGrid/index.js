import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Slide from 'react-reveal/Slide';
import { centerStore } from '@/mob-x/center';
import * as S from './styles';
import Image from '@F/Image';

function PictureGrid({ items, onClickItem }) {
  const setCenterComponent = useCallback((text) => {
    // NOTE: 중앙 문구 삭제
    // centerStore.setCenterComponent(<S.CenterText>{text}</S.CenterText>);
  }, []);

  return (
    <S.StyledPictureGrid>
      { items.map((item, index) => (
        <S.Picture
          onMouseEnter={() => setCenterComponent(item.description)}
          onMouseLeave={() => setCenterComponent(null)}
          onClick={() => onClickItem(index)}
          key={index}
        >
          <Slide
            left={index % 2 === 0}
            right={index % 2 === 1}
            duration={800}
            delay={index * 20}
          >
            <Image
              src={item.image}
              alt="IMAGE"
            />
          </Slide>
        </S.Picture>
      ))}
    </S.StyledPictureGrid>
  );
}
export default PictureGrid;

PictureGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  onClickItem: PropTypes.func.isRequired,
};
