import React from 'react';
import BackFace from '@I/tarot/backface.svg';
import * as S from './styles';

function Loading() {
  return (
    <S.StyledLoading>
      <img
        src={BackFace}
        alt="카드 뒷면"
      />
    </S.StyledLoading>
  );
}
export default Loading;

Loading.propTypes = {

};
