import { combineReducers, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';

const reducers = combineReducers({});

const middlewares = [ReduxThunk, logger];
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
