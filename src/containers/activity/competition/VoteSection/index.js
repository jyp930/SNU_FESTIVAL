import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { pdfjs, Document, Page } from 'react-pdf';

import Window from '@I/goods/window.png';
import FilledHeart from '@I/icon/filled-heart.svg';
import EmptyHeart from '@I/icon/empty-heart.svg';
import PopupModal from '@F/modal/PopupModal';
import TestPdf from '../pdfs/test.pdf';
import * as S from './styles';

const items = [
  {
    image: Window, title: '작품 타이틀1', author: '참가자명1', description: '작품 한 줄 설명1', type: 'pdf',
  },
  {
    image: Window, title: '작품 타이틀2', author: '참가자명2', description: '작품 한 줄 설명2', type: 'pdf',
  },
  {
    image: Window, title: '작품 타이틀3', author: '참가자명3', description: '작품 한 줄 설명3', type: 'youtube',
  },
  {
    image: Window, title: '작품 타이틀4', author: '참가자명4', description: '작품 한 줄 설명4', type: 'youtube',
  },
];

function VoteSection({ field, theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme.windowWidth]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // PDF
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = useCallback(({ numPages: newPages }) => {
    setNumPages(newPages);
    setPageNumber(1);
  }, []);
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);

  return (
    <S.StyledVoteSection>
      <S.ItemSection>
        {items.map(item => (
          <S.Item key={item.title}>
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
        <Document
          file={TestPdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={isMobile ? 0.5 : 1} />
          <S.Pagination>
            <span onClick={() => (pageNumber > 1 ? setPageNumber(pageNumber - 1) : null)}>&lt;</span>
            <span>{`Page ${pageNumber} of ${numPages}`}</span>
            <span onClick={() => (pageNumber < numPages ? setPageNumber(pageNumber + 1) : null)}>&gt;</span>
          </S.Pagination>
        </Document>

        {/* <iframe */}
        {/*  width={isMobile ? theme.windowWidth : theme.windowWidth * (2 / 3)} */}
        {/*  height={isMobile ? theme.windowWidth / 1.77 : (theme.windowWidth * (2 / 3)) / 1.77} */}
        {/*  src="https://www.youtube.com/embed/7Gu_K3iuBow" */}
        {/*  title="타이틀" */}
        {/*  frameBorder="0" */}
        {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" */}
        {/* /> */}
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
