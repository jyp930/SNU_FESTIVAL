import React from 'react';
import Bell from '@I/icon/bell.svg';
import useModal from '@U/hooks/useModal';
import Poster21Spring from '@I/poster/21spring.png';
import * as S from './styles';

function Notice() {
  const { modalComponent, setIsModalOpen } = useModal(TimeTable);

  return (
    <>
      <S.NoticeWrapper>
        <S.Notice onClick={() => setIsModalOpen(true)}>
          <img src={Bell} alt="" />
          <p>2021 봄축제 [페스월드] 전체 타임테이블</p>
        </S.Notice>
      </S.NoticeWrapper>
      {modalComponent}
    </>
  );
}
export default Notice;

Notice.propTypes = {

};

function TimeTable() {
  return (
    <S.TimeTable src={Poster21Spring} alt="타임테이블" />
  );
}
