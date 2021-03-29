import {
  all, call, put, takeLeading,
} from 'redux-saga/effects';
import { actions, types } from './state';
import { createNewMiniGameInFirestore } from './api';

export function* createNewMiniGame(action) {
  yield put(actions.setLoading(true));
  yield call(createNewMiniGameInFirestore, action.user);
  yield put(actions.reset());
  yield put(actions.setLoading(false));
}

export default function* () {
  yield all([takeLeading(types.CREATE_NEW_MINI_GAME, createNewMiniGame)]);
}
