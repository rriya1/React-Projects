import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import noteReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  noteReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
