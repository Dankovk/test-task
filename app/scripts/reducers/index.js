import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import data from './data';
import source from './source';
import sortTable from './SortTable';

const rootReducer = combineReducers({
    data: data,
    source: source,
    sortTable: sortTable,
    routing: routerReducer
});
export default rootReducer;