import React from 'react';
import useAuth, { useUser } from '@U/hooks/useAuth';
import PageLoading from '@F/loading/PageLoading';

function withUser(InputComponent) {
  return function ResultComponent(props) {
    useAuth(); // NOTE: 유저가 바뀔 때를 useEffect 로 감지하기 위함.
    const { user, isAuthorized } = useUser();

    return (
      <>
        { user.isLoading && <PageLoading message="로그인 중입니다..." /> }
        <InputComponent {...props} user={user} isAuthorized={isAuthorized} />
      </>
    );
  };
}
export default withUser;
