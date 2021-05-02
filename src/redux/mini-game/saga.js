import {
  all, call, put, takeLeading,
} from 'redux-saga/effects';
import { fetchMiniGameFromFirestore, setStageInFirestore } from '@/redux/mini-game/api';
import { toast } from 'react-toastify';
import { actions, types } from './state';

export function* fetchMiniGame(action) {
  try {
    const stages = yield call(fetchMiniGameFromFirestore, action.user);
    if (stages) yield put(actions.setMiniGame(stages));
    yield put(actions.setLoaded(true));
  } catch {
    toast('인터넷이 불안정합니다. 다시 시도해주세요.');
  }
}

export function* setFirestoreStage(action) {
  try {
    yield call(setStageInFirestore, action.user, action.stage, action.isCompleted);
    yield put(actions.setStage(action.stage, action.isCompleted));
  } catch {
    toast('인터넷이 불안정합니다. 다시 시도해주세요.');
  }
}

export default function* () {
  yield all([
    takeLeading(types.FETCH_MINI_GAME, fetchMiniGame),
    takeLeading(types.SET_FIRESTORE_STAGE, setFirestoreStage),
  ]);
}
