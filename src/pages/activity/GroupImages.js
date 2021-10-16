import React from 'react';
import Header, { HeaderContent } from '@F/layout/Header';
import styled from 'styled-components';

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  img {
    width: 50%;
    height: 50%;
  }
`;

const results = [
  'achieve', 'calm', 'delight', 'harmony', 'improvement', 'passion',
  'pleasure', 'precious', 'refresh', 'romance', 'stress-free', 'sympathy',
];

function GroupImages() {
  return (
    <>
      <Header />
      <HeaderContent>단체게임</HeaderContent>
      <Images>
        {results.map(result => (
          <img src={`https://snu-festival.web.app/images/${result}-card.png`} alt="" key={result} />
        ))}
      </Images>
    </>
  );
}
export default GroupImages;
