import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

function LiveSection({ url }) {
  return (
    <S.Wrapper>
      <S.Title>단체게임 실시간 LIVE</S.Title>
      {!url && <p>단체게임 진행 전입니다.</p>}
      {url && (
        <S.VideoWrapper
          heights={[750 / 1.77, 750 / 1.77, 500 / 1.77]}
        >
          <iframe
            width="100%"
            height="100%"
            src={url}
            title="2021 봄축제 홍보영상"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </S.VideoWrapper>
      )}
    </S.Wrapper>
  );
}
export default LiveSection;

LiveSection.propTypes = {
  url: PropTypes.string.isRequired,
};
