import {
  all, call, put, takeLeading,
} from 'redux-saga/effects';
import { actions, types } from './state';
import { createNewMissionInFirestore, fetchMissionsFromFirestore } from './api';

export function* createNewMissions(action) {
  yield call(createNewMissionInFirestore, action.user);
  yield put(actions.reset());
  yield put(actions.setLoaded(true));
}

export function* fetchMissions(action) {
  const mission = yield call(fetchMissionsFromFirestore, action.user);
  yield put(actions.setMission(mission));
  yield put(actions.setLoaded(true));
}

export default function* () {
  yield all([
    takeLeading(types.CREATE_NEW_MISSIONS, createNewMissions),
    takeLeading(types.FETCH_MISSIONS, fetchMissions),
  ]);
}
