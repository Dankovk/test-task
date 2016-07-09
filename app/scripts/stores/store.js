import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import rootReducer from '../reducers/index.js'

import works from '../data/works';



const persistedState = {
    works
};


const store = createStore(rootReducer,persistedState,applyMiddleware(thunk));


export const history = syncHistoryWithStore(browserHistory, store);

export default store;