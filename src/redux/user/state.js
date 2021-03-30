import { createReducer, createSetValueAction, setValueReducer } from '@/redux/common/helper-functions';
import sessionStorage from 'redux-persist/lib/storage/session';

/** prefix */
const PREFIX = 'USER';

/** initial state */
const INITIAL_STATE = {
  uid: null,
  email: null,
  isLoading: false,
};

/** type */
export const types = {
  SET_VALUE: `${PREFIX}/SET_VALUE`,
  SET_LOADING: `${PREFIX}/SET_LOADING`,
  RESET: `${PREFIX}/RESET`,
};

/** action */
export const actions = {
  setValue: createSetValueAction(types.SET_VALUE),
  setLoading: (isLoading) => ({ type: types.SET_LOADING, isLoading }),
  reset: () => ({ type: types.RESET }),
};

/** reducer */
const reducer = createReducer(INITIAL_STATE, {
  [types.SET_VALUE]: setValueReducer,
  [types.SET_LOADING]: (draft, action) => { draft.isLoading = action.isLoading; },
  [types.RESET]: (draft) => { draft.user = null; draft.isLoading = false; },
});
export default reducer;

export const userPersistConfig = {
  key: 'user',
  storage: sessionStorage,
  blacklist: [],
};
