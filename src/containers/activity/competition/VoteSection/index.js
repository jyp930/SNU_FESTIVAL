import React from 'react';
import PropTypes from 'prop-types';
import Window from '@I/goods/window.png';
import SimpleSlider from '@F/react-slick/SimpleSlider';
import FilledHeart from '@I/icon/filled-heart.svg';
import EmptyHeart from '@I/icon/empty-heart.svg';
import * as S from './styles';

const items = [
  {
    image: Window, title: '작품 타이틀1', author: '참가자명1', description: '작품 한 줄 설명1',
  },
  {
    image: Window, title: '작품 타이틀2', author: '참가자명2', description: '작품 한 줄 설명2',
  },
  {
    image: Window, title: '작품 타이틀3', author: '참가자명3', description: '작품 한 줄 설명3',
  },
  {
    image: Window, title: '작품 타이틀4', author: '참가자명4', description: '작품 한 줄 설명4',
  },
];

function VoteSection({ field }) {
  return (
    <S.StyledVoteSection>
      <S.SliderSection>
        <SimpleSlider items={items.map(item => (
          <S.Item>
            <S.ImageWrapper>
              <img src={item.image} alt="작품" />
              <S.LikeButton>
                <img src={EmptyHeart} alt="like" />
              </S.LikeButton>
            </S.ImageWrapper>
            <p>
              {item.title}
              {' '}
              -
              {' '}
              {item.author}
            </p>
            <p>{item.description}</p>
          </S.Item>
        ))}
        />
      </S.SliderSection>

      <S.SubmitSection>
        <S.SubmitButton>제출하기</S.SubmitButton>
        <p>버튼을 누른 이후에는 수정이 불가합니다!</p>
      </S.SubmitSection>
    </S.StyledVoteSection>
  );
}
export default VoteSection;

VoteSection.propTypes = {
  field: PropTypes.number.isRequired,
};
