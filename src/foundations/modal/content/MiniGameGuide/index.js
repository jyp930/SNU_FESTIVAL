import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import Close from '@I/icon/close.svg';
import * as S from './styles';

function MiniGameGuide({ setIsModalOpen }) {
  const history = useHistory();
  const goToHome = useCallback(() => {
    history.push('/activity/mini');
  }, [history]);

  return (
    <S.MiniGameGuideBox>
      <S.Image src={Close} alt="close" onClick={() => setIsModalOpen(false)} />
      <S.ContentBox>
        <p>🎉 정답입니다! 🎉</p>
        <p>
          아래 버튼을 클릭하여
          <br />
          미니게임 클리어 현황을 확인하세요
        </p>
        <S.Button onClick={goToHome}>
          다른 게임 하러 가기
        </S.Button>
      </S.ContentBox>
    </S.MiniGameGuideBox>
  );
}
export default MiniGameGuide;

MiniGameGuide.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
