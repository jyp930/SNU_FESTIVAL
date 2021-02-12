import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import countReducer, { countPersistConfig } from '@/redux/count/state';
import userReducer, { userPersistConfig } from '@/redux/user/state';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import countSaga from '@/redux/count/saga';

const reducer = combineReducers({
  count: persistReducer(countPersistConfig, countReducer),
  user: persistReducer(userPersistConfig, userReducer),
});

/**
 * NOTE: rootPersistConfig는 'reducer'를 최소 묶음으로 persist를 적용함.
 *       reducer 마다 'state'를 최소 묶음으로 nested Persists 를 적용할 수도 있음.
 * */
const rootPersistConfig = {
  key: 'snufestival/root',
  storage: sessionStorage,
  whitelist: [userReducer],
};
const persistedReducer = persistReducer(rootPersistConfig, reducer);

/**
 * saga 적용
 */
const sagaMiddleware = createSagaMiddleware();
// TODO: production 환경에서 redux_devtool 삭제
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

function* rootSaga() {
  yield all([countSaga()]);
}
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);
export default { store, persistor };
