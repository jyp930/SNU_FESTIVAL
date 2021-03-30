import React from 'react';
import PropTypes from 'prop-types';
import { HeaderContent } from '@F/layout/Header';
import { useUser } from '@U/hooks/useAuth';
import useInput from '@U/hooks/useInput';
import { getPasswordFromEmail } from '@U/functions/password';
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
      <HeaderContent>흑과백</HeaderContent>
      <S.Body>
        <input placeholder="패스워드" value={password.value} onChange={password.onChange} />
        <button onClick={checkClear}>클리어!</button>
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
