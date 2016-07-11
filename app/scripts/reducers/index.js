import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import data from './data';
import source from './source';
import sortTable from './SortTable';
import salary from './salaryFilter';

const rootReducer = combineReducers({
    data: data,
    source: source,
    sortTable: sortTable,
    salary: salary,
    routing: routerReducer
});
export default rootReducer;