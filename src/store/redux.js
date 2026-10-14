import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {reducer} from './reducer/reducer';
import sagaMiddlewares from './saga/allWatcher';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
	devTools: {trace: true, traceLimit: 25},
});
sagaMiddleware.run(sagaMiddlewares);

export default store;
