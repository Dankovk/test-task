import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import rootReducer from '../reducers/index.js'
import data from '!json!../data/data.json';


const persistedState = {
    data
};


const store = createStore(rootReducer,persistedState,applyMiddleware(thunk));


export const history = syncHistoryWithStore(browserHistory, store);

export default store;