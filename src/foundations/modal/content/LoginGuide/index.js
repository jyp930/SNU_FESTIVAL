import React from 'react';
import PropTypes from 'prop-types';
import Close from '@I/svg/icon/close.svg';
import * as S from './styles';

function LoginGuide({ setIsModalOpen }) {
  return (
    <S.LoginGuideBox>
      <S.Image src={Close} alt="close" onClick={() => setIsModalOpen(false)} />
      <S.ContentBox>
        <S.MainSpan>
          로그인을 하고
          <br />
          {' '}
          축제를 즐겨보세요!
        </S.MainSpan>
        <S.SubSpan>
          (구글 연동한 스누 메일 권장)
        </S.SubSpan>
        <S.Button>
          로그인 하러 가기
        </S.Button>
      </S.ContentBox>
    </S.LoginGuideBox>
  );
}
export default LoginGuide;

LoginGuide.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
