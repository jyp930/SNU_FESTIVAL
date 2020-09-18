import React from 'react';
import PropTypes from 'prop-types';
import BasicCard from '@F/card/BasicCard';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import IU3 from '@I/jpeg/IU3.jpeg';
import IU6 from '@I/jpeg/IU6.jpeg';
import IU7 from '@I/jpeg/IU7.jpeg';
import * as S from './styles';

function Performance() {
  return (
    <S.StyledPerformance>
      <S.CardContainer>
        { cardContentList.map(cardContent => (
          <S.CardItem
            key={cardContent.image}
          >
            <BasicCard
              image={cardContent.image}
              content={cardContent.content}
            />
          </S.CardItem>
        ))}
      </S.CardContainer>
    </S.StyledPerformance>
  );
}
export default Performance;

Performance.propTypes = {

};

const cardContentList = [
  {
    image: IU4,
    content: <div>축제화이팅</div>,
  },
  {
    image: IU5,
    content: <div>축제화이팅</div>,
  },
  {
    image: IU2,
    content: <div>축제화이팅</div>,
  },
  {
    image: IU3,
    content: <div>축제화이팅</div>,
  },
  {
    image: IU7,
    content: <div>축제화이팅</div>,
  },
  {
    image: IU6,
    content: <div>축제화이팅</div>,
  },
];
