import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, RootState } from '@/store/reducer';
import rootSaga from '@/store/sagas';

const sagaMiddleware = createSagaMiddleware();
const configureStore = (preloadedStore: object) => createStore<RootState, any, any, any>(
  rootReducer,
  preloadedStore,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

const store = configureStore({});
sagaMiddleware.run(rootSaga);

export default store;
