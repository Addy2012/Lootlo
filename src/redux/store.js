import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const midlleware = [];
if(process.env.NODE_ENV === 'development' ){
    midlleware.push(logger)
}
export const store = createStore( rootReducer, applyMiddleware(...midlleware))

export const persistor = persistStore(store)
export default {store,persistor};