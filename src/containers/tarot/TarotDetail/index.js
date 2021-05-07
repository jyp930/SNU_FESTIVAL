import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import Universe from '@I/tarot/universe.jpg';
import { useHistory } from 'react-router';
import ClipboardJS from 'clipboard';
import { toast } from 'react-toastify';
import KakaoIcon from '@I/icon/kakao.svg';
import LinkIcon from '@I/icon/link.svg';
import Loading from '@C/tarot/Loading';
import * as S from './styles';

function TarotDetail({ resultImage, result }) {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const goToTarot = useCallback(() => {
    history.push('/tarot');
  }, [history]);

  useEffect(() => {
    setIsLoading(true);
    new ClipboardJS('.clipboard');
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  const shareThroughKakao = useCallback(() => {
    window.Kakao.Link.sendCustom({
      templateId: 53192,
      templateArgs: {
        result,
        imageUrl: 'https://snufestival.com/mascot.jpg',
      },
    });
  }, [result]);

  return (
    <>
      <S.Background src={Universe} alt="" />
      <S.StyledTarotDetail>
        <HeaderContent backgroundColor="transparent" color="white">오늘의 타로</HeaderContent>
        {!isLoading && (
          <S.Body>
            <img src={resultImage} alt="" />
            <p>결과 공유하기</p>
            <S.Links>
              <img src={LinkIcon} alt="링크 공유" className="clipboard" data-clipboard-text={`https://snu-festival-staging.web.app/tarot/${result}`} onClick={() => toast('클립보드에 복사되었습니다')} />
              <img src={KakaoIcon} alt="카카오 공유" onClick={shareThroughKakao} />
            </S.Links>
            <S.Button onClick={goToTarot}>타로 다시보기</S.Button>
          </S.Body>
        )}
        {isLoading && <S.LoadingWrapper><Loading /></S.LoadingWrapper>}
      </S.StyledTarotDetail>
    </>
  );
}
export default TarotDetail;

TarotDetail.propTypes = {
  resultImage: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
};
