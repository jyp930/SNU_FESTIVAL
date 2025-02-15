import { createReducer, createSetValueAction, setValueReducer } from '@/redux/common/helper-functions';
import sessionStorage from 'redux-persist/lib/storage/session';

/** prefix */
const PREFIX = 'MINI_GAME';

/** initial state */
const INITIAL_STATE = {
  isLoaded: false,
  stage1: false,
  stage2: false,
  stage3: false,
  stage4: false,
  treasureHunt: null, // NOTE: null 이 아닌 배열이면 보물찾기 진행 중
};

/** type */
export const types = {
  SET_VALUE: `${PREFIX}/SET_VALUE`,
  SET_LOADED: `${PREFIX}/SET_LOADED`,
  RESET: `${PREFIX}/RESET`,
  FETCH_MINI_GAME: `${PREFIX}/FETCH_MINI_GAME`,
  SET_MINI_GAME: `${PREFIX}/SET_MINI_GAME`,
  SET_STAGE: `${PREFIX}/SET_STAGE`,
  SET_FIRESTORE_STAGE: `${PREFIX}/SET_FIRESTORE_STAGE`,
  START_TREASURE_HUNT: `${PREFIX}/START_TREASURE_HUNT`,
  END_TREASURE_HUNT: `${PREFIX}/END_TREASURE_HUNT`,
  PUSH_TREASURE_HUNT: `${PREFIX}/PUSH_TREASURE_HUNT`,
};

/** action */
export const actions = {
  setValue: createSetValueAction(types.SET_VALUE),
  setLoaded: (isLoaded) => ({ type: types.SET_LOADED, isLoaded }),
  reset: () => ({ type: types.RESET }),
  fetchMiniGame: (user) => ({ type: types.FETCH_MINI_GAME, user }),
  setMiniGame: (stages) => ({ type: types.SET_MINI_GAME, stages }),
  setStage: (stage, isCompleted) => ({ type: types.SET_STAGE, stage, isCompleted }),
  setFirestoreStage: (user, stage, isCompleted) => ({
    type: types.SET_FIRESTORE_STAGE, user, stage, isCompleted,
  }),
  startTreasureHunt: () => ({ type: types.START_TREASURE_HUNT }),
  endTreasureHunt: () => ({ type: types.END_TREASURE_HUNT }),
  pushTreasureHunt: (treasure) => ({ type: types.PUSH_TREASURE_HUNT, treasure }),
};

/** reducer */
const reducer = createReducer(INITIAL_STATE, {
  [types.SET_VALUE]: setValueReducer,
  [types.SET_LOADED]: (draft, action) => { draft.isLoaded = action.isLoaded; },
  [types.SET_MINI_GAME]: (draft, action) => {
    draft.stage1 = action.stages.stage1; draft.stage2 = action.stages.stage2;
    draft.stage3 = action.stages.stage3; draft.stage4 = action.stages.stage4;
  },
  [types.SET_STAGE]: (draft, action) => { draft[action.stage] = action.isCompleted; },
  [types.START_TREASURE_HUNT]: (draft) => { draft.treasureHunt = []; },
  [types.END_TREASURE_HUNT]: (draft) => { draft.treasureHunt = null; },
  [types.PUSH_TREASURE_HUNT]: (draft, action) => {
    if (draft.treasureHunt !== null) {
      draft.treasureHunt = [...draft.treasureHunt, action.treasure];
    }
  },
  [types.RESET]: (draft) => {
    draft.isLoaded = false;
    draft.stage1 = false; draft.stage2 = false;
    draft.stage3 = false; draft.stage4 = false;
    draft.treasureHunt = null;
  },
});
export default reducer;

export const miniGamePersistConfig = {
  key: 'miniGame',
  storage: sessionStorage,
  blacklist: [],
};
