import React from 'react';
import LottieFrame from '@/foundations/lottie/LottieFrame';
import notFoundPageJson from '@/static/image/lottie/404.json';
import * as S from './styles';

const redShoesPartOne = [
  '길을 잃었다, 어딜 가야 할까',
  '열두 개로 갈린 조각난 골목길',
  '어딜 가면 너를 다시 만날까',
  '운명으로 친다면, 내 운명을 고르자면',
  '눈을 감고 걸어도 맞는 길을 고르지',
];

const redShoesPartTwo = [
  '사라져버린 summer time',
  '너의 두 눈이 나를 비추던 summer time',
  '기다리기만 하는 내가 아냐',
  '너를 찾아 뚜벅',
  '내게 돌아올 summer time',
  '찬 바람 불면 그냥 두 눈 감기로 해',
  'What\'s the time? Summer time',
  '움파룸파둠 두비두바둠',
  '슬프지 않아 춤을 춘다',
  '다시, 다시',
];

const LinesInParagraph = lines => (
  <S.Paragraph>
    { lines.map(line => (
      <S.Line key={line}>
        {line}
        <br />
      </S.Line>
    ))}
  </S.Paragraph>
);

function Lottie404() {
  return (
    <S.StyledLottie404>
      { LinesInParagraph(redShoesPartOne) }
      <LottieFrame
        animationJson={notFoundPageJson}
        width={350}
        height={350}
      />
      { LinesInParagraph(redShoesPartTwo) }
    </S.StyledLottie404>
  );
}
export default Lottie404;
