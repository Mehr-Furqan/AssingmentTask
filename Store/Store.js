import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import combineReducers from './Reduser';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: [],
  // blacklist: ['HomeScreenBottomTabColor'],
};
const pReducer = persistReducer(persistConfig, combineReducers);
const store = createStore(pReducer, applyMiddleware(thunk));
const persister = persistStore(store);

export {store, persister};
