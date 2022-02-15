import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger();

const initialState = {
    user: 'EmmaTest'
}

export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ),
    
);