import React from 'react';
import PropTypes from 'prop-types';
import Bell from '@I/icon/bell.svg';
import * as S from './styles';

function Notice() {
  return (
    <S.NoticeWrapper>
      <S.Notice>
        <img src={Bell} alt="" />
        <p>2021 봄축제 [페스월드] 전체 타임테이블</p>
      </S.Notice>
    </S.NoticeWrapper>
  );
}
export default Notice;

Notice.propTypes = {

};
