
let defaultState = {
    min:0,
    max:15000
};

function salary (state = defaultState, action){
    switch (action.type){
        case 'SALARY_CHANGED':
             state = action.salary;
            return state;
    }
    return state
}
export default salary;