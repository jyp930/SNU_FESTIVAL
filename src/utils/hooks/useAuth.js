import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '@U/initializer/firebase';
import { actions } from '@/redux/user/state';
import firebase from 'firebase';

const useAuth = () => {
  const dispatch = useDispatch();

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

  return { signIn, signOut };
};
export default useAuth;
