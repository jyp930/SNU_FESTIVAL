import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { withTheme } from 'styled-components';
import MascotsInSpeechBubble from '@I/svg/mascot/mascots-in-speech-bubble.svg';

// TODO: 재활용 시 foundation 으로 분리
function StampDescriptionBox({ theme }) {
  const isMobile = useMemo(() => theme.windowWidth < 768, [theme]);

  return (
    <S.StyledStampDescriptionBox>
      <S.ContentBox>
        <S.Title>스탬프를 받는 방법</S.Title>
        <S.Description style={{ display: isMobile ? 'block' : 'flex' }}>
          <span>1. 방명록을 1개 이상 작성하고,</span>
          { isMobile ? <br /> : <div style={{ width: 15 }} /> }
          <span>2. 좋아요를 3개 이상 누르면 미션 완료!</span>
          { isMobile ? <br /> : <div style={{ width: 15 }} /> }
          <span>*좋아요 개수 순으로 상품 증정</span>
          { theme.windowWidth < 330 && <br /> }
          <span>(이벤트 페이지 참고)</span>
        </S.Description>
      </S.ContentBox>

      <S.MascotImage
        src={MascotsInSpeechBubble}
        alt="mascot"
      />
    </S.StyledStampDescriptionBox>
  );
}
export default withTheme(StampDescriptionBox);

StampDescriptionBox.propTypes = {
  theme: PropTypes.shape({
    windowWidth: PropTypes.number,
  }).isRequired,
};
