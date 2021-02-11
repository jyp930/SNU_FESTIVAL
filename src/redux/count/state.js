import { createReducer, createSetValueAction, setValueReducer } from '@/redux/common/helper-functions';
import storage from 'redux-persist/lib/storage';

/** prefix */
const PREFIX = 'COUNT';

/** initial state */
const INITIAL_STATE = {
  count: 0,
  isLoading: false,
};

/** type */
export const types = {
  SET_VALUE: `${PREFIX}/SET_VALUE`,
  ADD: `${PREFIX}/ADD`,
  ASYNC_ADD: `${PREFIX}/ASYNC_ADD`,
  SET_LOADING: `${PREFIX}/SET_LOADING`,
  RESET: `${PREFIX}/RESET`,
};

/** action */
export const actions = {
  setValue: createSetValueAction(types.SET_VALUE),
  addCount: (count) => ({ type: types.ADD, count }),
  addCountAsync: (count) => ({ type: types.ASYNC_ADD, count }),
  setLoading: (isLoading) => ({ type: types.SET_LOADING, isLoading }),
  reset: () => ({ type: types.RESET }),
};

/** reducer */
const reducer = createReducer(INITIAL_STATE, {
  [types.SET_VALUE]: setValueReducer,
  [types.ADD]: (draft, action) => { draft.count += action.count; },
  [types.SET_LOADING]: (draft, action) => { draft.isLoading = action.isLoading; },
  [types.RESET]: (draft) => { draft.count = 0; draft.isLoading = false; }, // TODO: addCountAsync 종료
});
export default reducer;

export const countPersistConfig = {
  key: 'count',
  storage,
  whitelist: ['count'],
};
