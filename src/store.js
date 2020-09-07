import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '@/reducer';

const configureStore = preloadedStore => createStore(
  rootReducer,
  preloadedStore,
  composeWithDevTools(applyMiddleware(thunk)),
);

const store = configureStore({});

export default store;
