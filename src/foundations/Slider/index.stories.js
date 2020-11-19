import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Slider from './index';
import IU1 from '@I/jpeg/IU1.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import IU3 from '@I/jpeg/IU3.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import IU6 from '@I/jpeg/IU6.jpeg';
import BasicCard from '@F/card/BasicCard';

export default {
  title: 'foundations/Slider',
};

export const Default = () => (
  <div style={{ height: '70vh' }}>
    <Slider>
      <>
        { contentList.map(cardContent => (
          <CardItem
            key={cardContent.name}
            length={contentList.length}
          >
            <BasicCard
              image={cardContent.image}
              content={<span>{cardContent.name}</span>}
            />
          </CardItem>
        ))}
      </>
    </Slider>
  </div>
);

const CardItem = styled.div`
  width: calc(150vw / ${props => props.length});
  ${media.lessThan('medium')`
    width: calc(400vw / ${props => props.length});
  `};
  height: 90%;
  
  box-sizing: border-box;
  padding: 1rem;
`;

const contentList = [
  { name: '19가을 내모난꿈', image: IU1 },
  { name: '19봄 백색소음', image: IU2 },
  { name: '18가을 진리는 나의 빚', image: IU3 },
  { name: '18봄 어른이 보호구역', image: IU4 },
  { name: '17가을 궤도루팡', image: IU5 },
  { name: '17봄 먼나라 이런나라', image: IU6 },
];
