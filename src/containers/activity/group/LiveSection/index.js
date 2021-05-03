import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function LiveSection() {
  return (
    <S.Wrapper>
      <p>단체게임 실시간 LIVE</p>
      <S.VideoWrapper
        heights={[750 / 1.77, 750 / 1.77, 500 / 1.77]}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/86BST8NIpNM?start=30"
          title="축하사 홍보영상"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </S.VideoWrapper>
    </S.Wrapper>
  );
}
export default LiveSection;

LiveSection.propTypes = {

};
