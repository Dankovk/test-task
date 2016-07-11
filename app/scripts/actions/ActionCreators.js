export function changeSource(source){
    return{
        type:'SOURCE_CHANGED',
        source: source
    }
}

export function changeSort(data){
    return{
        type:'SORTING_CHANGED',
        data: data
    }
}