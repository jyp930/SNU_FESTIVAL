import React from 'react';
import BasicCard from '@F/card/BasicCard';
import IU1 from '@I/jpeg/IU1.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import IU3 from '@I/jpeg/IU3.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import poster18spring from '@I/jpg/poster18spring.jpg';
import poster18fall from '@I/png/poster18fall.png';
import poster19spring from '@I/png/poster19spring.png';
import poster19fall from '@I/png/poster19fall.png';
import logo from '@I/png/logo.png';
import * as S from './styles';

const ContentList = [
  {
    name: '19가을 내모난꿈',
    image: IU1,
  },
  {
    name: '19봄 백색소음',
    image: IU2,
  },
  {
    name: '18가을 진리는 나의 빚',
    image: IU3,
  },
  {
    name: '18봄 어른이 보호구역',
    image: IU4,
  },
];

function Introduction() {
  return (
    <S.StyledIntroduction>
      <S.WordsContainer>
        <S.Logo src={logo} alt="logo" />
        <S.Words>
          <h2>축하사 장의 말</h2>
          <S.Content>축하사는 부터 시작해서 년 째 서울대학교 축제를 주관하고 있는 단체입니다. 많은 사랑 부탁드립니다.축하사는 부터 시작해서 년 째 서울대학교 축제를 주관하고 있는 단체입니다. 많은 사랑 부탁드립니다.축하사는 부터 시작해서 년 째 서울대학교 축제를 주관하고 있는 단체입니다. 많은 사랑 부탁드립니다.축하사는 부터 시작해서 년 째 서울대학교 축제를 주관하고 있는 단체입니다. 많은 사랑 부탁드립니다.축하사는 부터 시작해서 년 째 서울대학교 축제를 주관하고 있는 단체입니다. 많은 사랑 부탁드립니다.</S.Content>
        </S.Words>
      </S.WordsContainer>
      <S.StyledSlider>
        <S.SliderContainer>
          { ContentList.map((cardContent, index) => (
            <S.CardItem
              key={cardContent.image}
            >
              <BasicCard
                image={cardContent.image}
                content={cardContent.name}
              />
            </S.CardItem>
          ))}
        </S.SliderContainer>
      </S.StyledSlider>
    </S.StyledIntroduction>
  );
}
export default Introduction;

Introduction.propTypes = {

};
