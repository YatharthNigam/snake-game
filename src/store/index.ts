// The sagas/index.ts file will consist of all the sagas that we will use in our application.

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import gameReducer from './reducers';
import watcherSagas from './sagas';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(gameReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSagas);
export default store;
