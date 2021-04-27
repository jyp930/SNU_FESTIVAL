import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import { useUser } from '@U/hooks/useAuth';
import useInput from '@U/hooks/useInput';
import { getPasswordFromEmail } from '@U/functions/password';
import Rule from '@C/activity/mini/black-and-white/Rule';
import Swirl from '@I/activity/black-and-white/swirl.svg';
import Answer from '@C/activity/mini/black-and-white/Answer';
import * as S from './styles';

export function BlackAndWhite({ user, isAuthorized }) {
  const password = useInput('');

  const checkClear = () => {
    if (isAuthorized) {
      if (password.value === getPasswordFromEmail(user.email, 1)) {
        console.log('클리어!');
      } else {
        console.log('틀림');
      }
    }
  };

  return (
    <S.StyledBlackAndWhite>
      <HeaderContent backgroundColor="transparent" color="white" style={{ mixBlendMode: 'difference' }}>흑과백</HeaderContent>
      <S.Body>
        <Rule />
        <S.Zoom src={Swirl} alt="줌" />
        <Answer />
      </S.Body>
    </S.StyledBlackAndWhite>
  );
}

BlackAndWhite.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isLoading: PropTypes.bool,
    email: PropTypes.string,
  }).isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

function BlackAndWhiteParent() {
  const { user, isAuthorized } = useUser();

  return <BlackAndWhite user={user} isAuthorized={isAuthorized} />;
}
export default BlackAndWhiteParent;
