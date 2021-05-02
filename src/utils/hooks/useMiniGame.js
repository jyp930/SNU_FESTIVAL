import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@/redux/mini-game/state';
import { useUser } from '@U/hooks/useAuth';

const useMiniGame = () => {
  const miniGame = useSelector(state => state.miniGame);
  const { user, isAuthorized } = useUser();

  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthorized && !miniGame.isLoaded) {
      dispatch(actions.fetchMiniGame(user));
    }
  }, [dispatch, miniGame, user, isAuthorized]);

  return miniGame;
};
export default useMiniGame;
