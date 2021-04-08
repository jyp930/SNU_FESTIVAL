import { createReducer, createSetValueAction, setValueReducer } from '@/redux/common/helper-functions';
import sessionStorage from 'redux-persist/lib/storage/session';

/** prefix */
const PREFIX = 'MISSION';

/** initial state */
const INITIAL_STATE = {
  isLoaded: false,
  guestbook: false,
};

/** type */
export const types = {
  SET_VALUE: `${PREFIX}/SET_VALUE`,
  SET_LOADED: `${PREFIX}/SET_LOADED`,
  RESET: `${PREFIX}/RESET`,
  CREATE_NEW_MISSION: `${PREFIX}/CREATE_NEW_MISSION`,
};

/** action */
export const actions = {
  setValue: createSetValueAction(types.SET_VALUE),
  setLoaded: (isLoaded) => ({ type: types.SET_LOADED, isLoaded }),
  reset: () => ({ type: types.RESET }),
  createNewMission: (user) => ({ type: types.CREATE_NEW_MISSION, user }),
};

/** reducer */
const reducer = createReducer(INITIAL_STATE, {
  [types.SET_VALUE]: setValueReducer,
  [types.SET_LOADED]: (draft, action) => { draft.isLoaded = action.isLoaded; },
  [types.RESET]: (draft) => { draft.isLoaded = false; draft.guestbook = false; },
});
export default reducer;

export const missionPersistConfig = {
  key: 'mission',
  storage: sessionStorage,
  blacklist: [],
};
