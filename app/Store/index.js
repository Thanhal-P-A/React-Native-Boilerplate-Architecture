import Asyncstorage from '@react-native-community/async-storage';
import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../Reducer';
import sagas from '../Saga';

const config = {
  key: 'root',
  storage: Asyncstorage,
  blacklist: ['globalReducer', 'loaderReducer'],
  whitelist: ['loginReducer'],
  debug: true,
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (__DEV__) {
  middleware.push(createLogger());
}

const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig = {enhancers};
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  //   console.log('Test', store.getState());
});
const configureStore = () => {
  return {persistor, store};
};

sagaMiddleware.run(sagas);

export default configureStore;
