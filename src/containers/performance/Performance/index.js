import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BasicCard from '@F/card/BasicCard';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import IU3 from '@I/jpeg/IU3.jpeg';
import IU6 from '@I/jpeg/IU6.jpeg';
import IU7 from '@I/jpeg/IU7.jpeg';
import FullScreen from '@F/FullScreen';
import Sal from '@F/Sal';
import * as S from './styles';

function Performance() {
  const [detailComponent, setDetailComponent] = useState(null);

  return (
    <S.StyledPerformance>
      <S.CardContainer id="important">
        { cardContentList.map((cardContent, index) => (
          <S.CardItem
            onClick={() => setDetailComponent(cardContent.content)}
            key={cardContent.image}
          >
            <Sal
              threshold={0.2}
              animation="slide-up"
              duration={500}
              delay={(index % (cardContentList.length / 2)) * 50}
            >
              <BasicCard
                image={cardContent.image}
                content={cardContent.content}
              />
            </Sal>
          </S.CardItem>
        ))}
      </S.CardContainer>
      <FullScreen
        isFullScreen={!!detailComponent}
        onCloseFullScreen={() => setDetailComponent(null)}
      >
        { detailComponent }
      </FullScreen>
    </S.StyledPerformance>
  );
}
export default Performance;

Performance.propTypes = {

};

const cardContentList = [
  {
    image: IU4,
    content: <div>축제화이팅1</div>,
  },
  {
    image: IU5,
    content: <div>축제화이팅2</div>,
  },
  {
    image: IU2,
    content: <div>축제화이팅3</div>,
  },
  {
    image: IU3,
    content: <div>축제화이팅4</div>,
  },
  {
    image: IU7,
    content: <div>축제화이팅5</div>,
  },
  {
    image: IU6,
    content: <div>축제화이팅6</div>,
  },
];
