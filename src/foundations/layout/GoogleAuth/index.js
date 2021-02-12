import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';
import { auth } from '@U/initializer/firebase';
import firebase from 'firebase';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { actions } from '@/redux/user/state';

function GoogleAuth({ className }) {
  const dispatch = useDispatch();
  const { uid, isLoading } = useSelector(state => ({
    uid: state.user.uid,
    isLoading: state.user.isLoading,
  }), shallowEqual);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        dispatch(actions.setValue('uid', currentUser.uid));
      } else {
        dispatch(actions.setValue('uid', null));
      }
      dispatch(actions.setLoading(false));
    });
  }, [dispatch]);

  const signIn = useCallback(async () => {
    await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
    const provider = new firebase.auth.GoogleAuthProvider();

    dispatch(actions.setLoading(true));
    try {
      await auth.signInWithRedirect(provider);
    } catch {
      dispatch(actions.setLoading(false));
    }
  }, [dispatch]);

  const signOut = useCallback(async () => {
    dispatch(actions.setLoading(true));
    try {
      await auth.signOut();
    } catch {
      dispatch(actions.setLoading(false));
    }
  }, [dispatch]);

  return (
    <S.StyledGoogleAuth className={className}>
      {/* eslint-disable-next-line no-nested-ternary */}
      { isLoading
        ? <S.Loading>로딩중...</S.Loading>
        : uid
          ? <S.SignButton onClick={signOut}>구글 로그아웃 테스트</S.SignButton>
          : <S.SignButton onClick={signIn}>구글 로그인 테스트</S.SignButton>}
    </S.StyledGoogleAuth>
  );
}
export default GoogleAuth;

GoogleAuth.propTypes = {
  className: PropTypes.string.isRequired,
};
