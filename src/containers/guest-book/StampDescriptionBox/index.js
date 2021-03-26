import React from 'react';
import PropTypes from 'prop-types';
import MascotsInSpeechBubble from '@I/svg/mascot/mascots-in-speech-bubble.svg';
import * as S from './styles';

// TODO: 재활용 시 foundation 으로 분리
function StampDescriptionBox() {
  return (
    <S.StyledStampDescriptionBox>
      <S.ContentBox>
        <S.Title>스탬프를 받는 방법</S.Title>
        <S.Description>
          <span>1. 방명록을 1개 이상 작성하고,</span>
          <br />
          <span>2. 좋아요를 3개 이상 누르면 미션 완료!</span>
        </S.Description>
      </S.ContentBox>

      <S.MascotImage
        src={MascotsInSpeechBubble}
        alt="mascot"
      />
    </S.StyledStampDescriptionBox>
  );
}
export default StampDescriptionBox;

StampDescriptionBox.propTypes = {

};
