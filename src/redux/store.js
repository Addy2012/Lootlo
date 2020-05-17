import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const midlleware = [logger];

const store = createStore( rootReducer, applyMiddleware(...midlleware))

export default store;