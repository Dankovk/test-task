import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import works from './works';

const rootReducer = combineReducers({
    works: works,
    routing: routerReducer
});
export default rootReducer;