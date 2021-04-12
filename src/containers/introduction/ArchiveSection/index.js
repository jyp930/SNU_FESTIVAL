import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Carousel from '@F/carousel/Carousel';
import Poster19Spring from '@I/poster/19spring.png';
import Poster18Spring from '@I/poster/18spring.jpg';
import Poster17Spring from '@I/poster/17spring.jpeg';
import Poster19Fall from '@I/poster/19fall.png';
import Poster18Fall from '@I/poster/18fall.jpeg';
import Poster17Fall from '@I/poster/17fall.jpg';
import Poster16Fall from '@I/poster/16fall.jpg';
import * as S from './styles';

function ArchiveSection({ isMobile, theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = useMemo(() => archives[currentIndex % archives.length], [currentIndex]);

  return (
    <S.Wrapper>
      <S.StyledArchiveSection>
        <Carousel
          className="Carousel"
          fullHeight={isMobile ? 340 : theme.windowWidth / 2}
          fullWidth={isMobile ? 340 : (theme.windowWidth / 2 > 820 ? 820 : theme.windowWidth / 2)}
          items={[Poster19Fall, Poster19Spring, Poster18Fall, Poster18Spring, Poster17Fall,
            Poster17Spring, Poster19Fall, Poster19Spring, Poster18Fall, Poster18Spring,
            Poster17Fall, Poster17Spring].map(image => (
              <S.Poster><img src={image} alt="포스터" /></S.Poster>
          ))}
          emitCurrentIndex={setCurrentIndex}
        />
        <S.Texts>
          <p>{currentItem.time}</p>
          <p>{currentItem.name}</p>
          <p>{currentItem.time}</p>
        </S.Texts>
      </S.StyledArchiveSection>
    </S.Wrapper>
  );
}
export default ArchiveSection;

ArchiveSection.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};

const archives = [
  {
    time: '2019 가을 축제', name: '내모난꿈', image: Poster19Fall, description: '내모난꿈이다',
  },
  { time: '2019 봄 축제', name: '백색소음', image: Poster19Spring },
  { time: '2018 가을 축제', name: '진리는 나의 빚', image: Poster18Fall },
  { time: '2018 봄 축제', name: '어른이 보호구역', image: Poster18Spring },
  { time: '2017 가을 축제', name: '궤도루팡', image: Poster17Fall },
  { time: '2017 봄 축제', name: '뭔 나라 이런 나라', image: Poster17Spring },
  { time: '2016 가을 축제', name: '쇼윈도 탈출', image: Poster16Fall },
];
