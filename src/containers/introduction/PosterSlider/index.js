import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import Slider from '@F/Slider';
import Image from '@F/Image';
import spring17 from '@I/poster/17spring.jpeg';
import fall17 from '@I/poster/17fall.jpg';
import spring18 from '@I/poster/18spring.jpg';
import fall18 from '@I/poster/18fall.jpeg';
import spring19 from '@I/poster/19spring.png';
import fall19 from '@I/poster/19fall.png';

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
              <Image
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
  { name: '19가을 내모난꿈', image: fall19 },
  { name: '19봄 백색소음', image: spring19 },
  { name: '18가을 진리는 나의 빚', image: fall18 },
  { name: '18봄 어른이 보호구역', image: spring18 },
  { name: '17가을 궤도루팡', image: fall17 },
  { name: '17봄 먼나라 이런나라', image: spring17 },
];
