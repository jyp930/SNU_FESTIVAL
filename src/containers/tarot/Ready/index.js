import React from 'react';
import ReadyOne from '@I/tarot/ready-1.png';
import ReadyTwo from '@I/tarot/ready-2.png';
import * as S from './styles';

function Ready() {
  return (
    <S.StyledReady>
      <div>
        <img src={ReadyOne} alt="마음 속 감정에 집중하면서" />
        <img src={ReadyTwo} alt="한 장의 카드를 뽑아주세요" />
      </div>
    </S.StyledReady>
  );
}
export default Ready;

Ready.propTypes = {

};
