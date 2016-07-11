
function sortTable (state = [], action){
    switch (action.type){
        case 'SORTING_CHANGED':
            return Object.assign({}, state, action.data);
    }
    return state
}
export default sortTable;