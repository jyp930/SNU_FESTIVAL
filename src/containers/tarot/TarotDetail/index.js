import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Universe from '@I/tarot/universe.jpg';
import { useHistory } from 'react-router';
import ClipboardJS from 'clipboard';
import { toast } from 'react-toastify';
import * as S from './styles';

function TarotDetail({ resultImage, url }) {
  const history = useHistory();
  const goToTarot = useCallback(() => {
    history.push('/tarot');
  }, [history]);

  useEffect(() => {
    new ClipboardJS('.clipboard');
  }, []);

  return (
    <>
      <S.Background src={Universe} alt="" />
      <S.StyledTarotDetail>
        <HeaderContent backgroundColor="transparent" color="white">오늘의 타로</HeaderContent>
        <S.Body>
          <img src={resultImage} alt="" />
          <p>결과 공유하기</p>
          <S.Links>
            <div className="clipboard" data-clipboard-text={url} onClick={() => toast('클립보드에 복사되었습니다')} />
            <div />
          </S.Links>
          <S.Button onClick={goToTarot}>타로 다시보기</S.Button>
        </S.Body>
      </S.StyledTarotDetail>
    </>
  );
}
export default TarotDetail;

TarotDetail.propTypes = {
  resultImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
