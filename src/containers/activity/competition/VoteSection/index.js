import React, { useMemo, useState } from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Window from '@I/goods/window.png';
import FilledHeart from '@I/icon/filled-heart.svg';
import EmptyHeart from '@I/icon/empty-heart.svg';
import PopupModal from '@F/modal/PopupModal';
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

function VoteSection({ field, theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.StyledVoteSection>
      <S.ItemSection>
        {items.map(item => (
          <S.Item>
            <S.ImageWrapper>
              <img src={item.image} alt="작품" onClick={() => setIsModalOpen(true)} />
              <S.LikeButton onClick={() => alert(1)}>
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
      </S.ItemSection>

      <PopupModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        closeOnDocumentClick
        width={`${isMobile ? theme.windowWidth : theme.windowWidth * (2 / 3)}px`}
      >
        <iframe
          width={isMobile ? theme.windowWidth : theme.windowWidth * (2 / 3)}
          height={isMobile ? theme.windowWidth / 1.77 : (theme.windowWidth * (2 / 3)) / 1.77}
          src="https://www.youtube.com/embed/7Gu_K3iuBow"
          title="타이틀"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </PopupModal>

      <S.SubmitSection>
        <S.SubmitButton>제출하기</S.SubmitButton>
        <p>버튼을 누른 이후에는 수정이 불가합니다!</p>
      </S.SubmitSection>
    </S.StyledVoteSection>
  );
}
export default withTheme(VoteSection);

VoteSection.propTypes = {
  field: PropTypes.number.isRequired,
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
