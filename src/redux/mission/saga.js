import {
  all, call, put, takeLeading,
} from 'redux-saga/effects';
import { actions, types } from './state';
import { createNewMissionInFirestore } from './api';

export function* createNewMission(action) {
  yield put(actions.setLoading(true));
  yield call(createNewMissionInFirestore, action.user);
  yield put(actions.reset());
  yield put(actions.setLoading(false));
}

export default function* () {
  yield all([takeLeading(types.CREATE_NEW_MISSION, createNewMission)]);
}
