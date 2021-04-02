import React from 'react';
import PropTypes from 'prop-types';
import Close from '@I/icon/close.svg';
import useAuth from '@U/hooks/useAuth';
import * as S from './styles';

function SignInGuide({ setIsModalOpen }) {
  const { signIn } = useAuth();

  return (
    <S.SignInGuideBox>
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
        <S.SubSpan>
          (카카오톡 앱 내 브라우저 사용 불가)
        </S.SubSpan>
        <S.Button onClick={signIn}>
          로그인 하러 가기
        </S.Button>
      </S.ContentBox>
    </S.SignInGuideBox>
  );
}
export default SignInGuide;

SignInGuide.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
