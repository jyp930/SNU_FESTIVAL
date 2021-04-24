import React from 'react';
import PropTypes from 'prop-types';
import SimpleSlider from '@F/react-slick/SimpleSlider';
import Window from '@I/goods/window.png';
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

function ArchiveSection({ fieldName }) {
  return (
    <S.StyledArchiveSection>
      <S.Title>
        {fieldName}
        부문 우수작 모아보기
      </S.Title>
      <SimpleSlider items={items.map(item => (
        <S.Item>
          <img src={item.image} alt="작품" />
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
    </S.StyledArchiveSection>
  );
}
export default ArchiveSection;

ArchiveSection.propTypes = {
  fieldName: PropTypes.string.isRequired,
};
