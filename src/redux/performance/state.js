import { createReducer, createSetValueAction, setValueReducer } from '@/redux/common/helper-functions';
import sessionStorage from 'redux-persist/lib/storage/session';

/** prefix */
const PREFIX = 'PERFORMANCE_MISSION';

/** initial state */
const INITIAL_STATE = {
  phoneCert: false,
  singStealer: false,
  hitTheStage: false,
  gameTournament: false,
};

/** type */
export const types = {
  SET_VALUE: `${PREFIX}/SET_VALUE`,
  RESET: `${PREFIX}/RESET`,
};

/** action */
export const actions = {
  setValue: createSetValueAction(types.SET_VALUE),
  reset: () => ({ type: types.RESET }),
};

/** reducer */
const reducer = createReducer(INITIAL_STATE, {
  [types.SET_VALUE]: setValueReducer,
  [types.RESET]: (draft) => {
    draft.phoneCert = false;
    draft.singStealer = false;
    draft.hitTheStage = false;
    draft.gameTournament = false;
  },
});
export default reducer;

export const performancePersistConfig = {
  key: 'performanceMission',
  storage: sessionStorage,
  blacklist: [],
};
