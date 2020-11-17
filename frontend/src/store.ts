import { combineReducers, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import userReducer from './redux/user';
import requestReducer from './redux/request';

const reducers = combineReducers({
    user: userReducer,
    requests: requestReducer,
});

const middlewares = [ReduxThunk, logger];
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
