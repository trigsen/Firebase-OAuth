import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, RootState } from '@/reducer';
import rootSaga from '@/sagas';
import { localStorageRemover, logger } from '@/utils/middlewares';

const sagaMiddleware = createSagaMiddleware();
const configureStore = (preloadedStore: object) => createStore<RootState, any, any, any>(
  rootReducer,
  preloadedStore,
  composeWithDevTools(applyMiddleware(sagaMiddleware, localStorageRemover, logger)),
);

const store = configureStore({});
sagaMiddleware.run(rootSaga);

export default store;
