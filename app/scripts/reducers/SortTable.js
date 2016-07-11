
function sortTable (state = [], action){
    switch (action.type){
        case 'SORTING_CHANGED':
            return action.data;
    }
    return state
}
export default sortTable;