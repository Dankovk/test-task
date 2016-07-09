
let defaultState = {loading:false, data:null, error:null};

function works (state = defaultState, action){
    switch (action.type){
        case 'WORKS_CHANGED':
            console.log('changed');
            return state
    }
    return state
}
export default works;