import React from 'react';
import BasicCard from '@F/card/BasicCard';
import Slider from '@F/Slider';
import IU1 from '@I/jpeg/IU1.jpeg';
import IU2 from '@I/jpeg/IU2.jpeg';
import IU3 from '@I/jpeg/IU3.jpeg';
import IU4 from '@I/jpeg/IU4.jpeg';
import IU5 from '@I/jpeg/IU5.jpeg';
import IU6 from '@I/jpeg/IU6.jpeg';
import logo from '@I/png/logo.png';
import * as S from './styles';

function Introduction() {
  return (
    <S.StyledIntroduction>
      <S.WordsContainer>
        <S.Logo src={logo} alt="logo" />
        <S.Words>
          <h2>축하사장의 말</h2>
          <S.Content>
            얼마나 반짝이는 보는 속에서 설레는 청춘의 앞이 있음으로써 때문이다. 그러므로 따뜻한 우리는 더운지라 설레는 없으면 이상 힘있다.
            두손을 이것은 내려온 투명하되 불어 얼음과 것이다. 밥을 커다란 동산에는 끝에 것이다. 이상을 구하기 생생하며, 힘있다.
            영원히 곳으로 수 속잎나고, 피고, 청춘의 커다란 맺어, 그들의 이것이다. 만천하의 용기가 싹이 이상의 영락과 유소년에게서 사막이다.
            같이, 위하여, 인간은 앞이 위하여 튼튼하며, 것이다. 동력은 미묘한 구할 피가 이것을 실현에 사막이다.
            꽃이 영원히 무한한 얼마나 평화스러운 피어나기 곧 인생을 용기가 있는가? 위하여 하여도 하는 이것이야말로 트고,
            얼음에 이상을 그들의 바이며, 아니다. 청춘을 어디 하였으며, 황금시대다. 청춘의 얼마나 못할 무한한 살았으며, 그들은 원대하고, 주며, 있다.
          </S.Content>
        </S.Words>
      </S.WordsContainer>
      <S.SliderContainer>
        <Slider>
          <>
            { contentList.map(cardContent => (
              <S.CardItem
                key={cardContent.name}
                length={contentList.length}
              >
                <BasicCard
                  image={cardContent.image}
                  content={<span>{cardContent.name}</span>}
                />
              </S.CardItem>
            ))}
          </>
        </Slider>
      </S.SliderContainer>
    </S.StyledIntroduction>
  );
}
export default Introduction;

Introduction.propTypes = {

};

const contentList = [
  { name: '19가을 내모난꿈', image: IU1 },
  { name: '19봄 백색소음', image: IU2 },
  { name: '18가을 진리는 나의 빚', image: IU3 },
  { name: '18봄 어른이 보호구역', image: IU4 },
  { name: '17가을 궤도루팡', image: IU5 },
  { name: '17봄 먼나라 이런나라', image: IU6 },
];
