import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Slider from '@F/Slider';
import IU1 from '@I/jpeg/IU1.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import IU3 from '@I/jpeg/IU3.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import IU6 from '@I/jpeg/IU6.jpeg';

function PosterSlider() {
  return (
    <S.SliderContainer>
      <Slider>
        <>
          { contentList.map(cardContent => (
            <S.CardItem
              key={cardContent.name}
              length={contentList.length}
            >
              <S.Image
                src={cardContent.image}
                alt="축제 포스트 사진"
              />
            </S.CardItem>
          ))}
        </>
      </Slider>
    </S.SliderContainer>
  );
}
export default PosterSlider;

PosterSlider.propTypes = {

};

const contentList = [
  { name: '19가을 내모난꿈', image: IU1 },
  { name: '19봄 백색소음', image: IU2 },
  { name: '18가을 진리는 나의 빚', image: IU3 },
  { name: '18봄 어른이 보호구역', image: IU4 },
  { name: '17가을 궤도루팡', image: IU5 },
  { name: '17봄 먼나라 이런나라', image: IU6 },
];
