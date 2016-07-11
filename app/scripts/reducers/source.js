let defaultSource = {draftkings:true, fantasyaces:false, fanduel:false};

function source (state = defaultSource, action){
    switch (action.type){
        case 'SOURCE_CHANGED':
            let state = Object.assign({},state, action.source);
            console.log(state);
            return state;
    }
    return state
}
export default source;



