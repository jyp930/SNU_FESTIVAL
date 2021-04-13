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
        <S.Title>역대 축제 모아보기</S.Title>
        <Carousel
          className="Carousel"
          fullHeight={isMobile ? 340 : theme.windowWidth / 2.2}
          fullWidth={isMobile ? 340 : (theme.windowWidth / 2 > 820 ? 820 : theme.windowWidth / 2)}
          items={[Poster19Fall, Poster19Spring, Poster18Fall, Poster18Spring, Poster17Fall,
            Poster17Spring, Poster16Fall, Poster19Fall, Poster19Spring, Poster18Fall, Poster18Spring,
            Poster17Fall, Poster17Spring, Poster16Fall].map(image => (
              <S.Poster><img src={image} alt="포스터" /></S.Poster>
          ))}
          emitCurrentIndex={setCurrentIndex}
        />
        <S.Texts>
          <p>{currentItem.time}</p>
          <p>{currentItem.name}</p>
          <p>{currentItem.description}</p>
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
    time: '2019 가을 축제', name: '내모난꿈', image: Poster19Fall, description: '당신만의 특별한 모남이, 어디서든 볼 수 있는 매끈한 동그라미보다 더 멋지다는 것을.',
  },
  {
    time: '2019 봄 축제', name: '백색소음', image: Poster19Spring, description: '백 가지 반짝이는 빛깔이 내는 시끌시끌한 소리',
  },
  {
    time: '2018 가을 축제', name: '진리는 나의 빚', image: Poster18Fall, description: '부정할 수 없이 짓눌러오는 빚의 무게에 굴하지 않는, 진리를 빚으로 만들어 내는 사회에 대한 유쾌한 소란',
  },
  {
    time: '2018 봄 축제', name: '어른이 보호구역', image: Poster18Spring, description: '작은 것 하나에도 큰 행복을 얻고 아무 걱정 없이 뛰어놀던 \'어른이\'들을 위한 축제',
  },
  {
    time: '2017 가을 축제', name: '궤도루팡', image: Poster17Fall, description: '여러분이 꾸준히 걸어욌던 "궤도"는 축제가 잠시 훔쳐가겠습니다.',
  },
  {
    time: '2017 봄 축제', name: '뭔 나라 이런 나라', image: Poster17Spring,
  },
  { time: '2016 가을 축제', name: '쇼윈도 탈출', image: Poster16Fall },
];
