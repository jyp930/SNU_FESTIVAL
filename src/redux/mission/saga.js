import {
  all, call, put, takeLeading,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { actions, types } from './state';
import { fetchMissionsFromFirestore, setMissionInFirestore } from './api';

export function* fetchMissions(action) {
  try {
    const missions = yield call(fetchMissionsFromFirestore, action.user);
    if (missions) yield put(actions.setMissions(missions));
    yield put(actions.setLoaded(true));
  } catch {
    toast('인터넷이 불안정합니다. 다시 시도해주세요.');
  }
}

export function* setFirestoreMission(action) {
  try {
    yield call(setMissionInFirestore, action.user, action.mission, action.isCompleted);
    yield put(actions.setMission(action.mission, action.isCompleted));
  } catch {
    toast('인터넷이 불안정합니다. 다시 시도해주세요.');
  }
}

export default function* () {
  yield all([
    takeLeading(types.FETCH_MISSIONS, fetchMissions),
    takeLeading(types.SET_FIRESTORE_MISSION, setFirestoreMission),
  ]);
}
