import {
  all, call, put, takeLeading,
} from 'redux-saga/effects';
import { actions, types } from './state';
import { callApiAdd } from './api';

export function* fetchData(action) {
  yield put(actions.setLoading(true));
  yield call(callApiAdd);
  yield put(actions.addCount(action.count));
  yield put(actions.setLoading(false));
}

export default function* () {
  yield all([takeLeading(types.ASYNC_ADD, fetchData)]);
}
