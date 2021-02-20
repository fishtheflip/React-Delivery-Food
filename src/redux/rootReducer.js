const reducer = (state = { food: [1], finalprice: 0}, action) =>{
    switch(action.type){
        case 'ADD':
            return state;
        case 'INC_ITEM':
            return state;
        case 'DEC_ITEM':
            return state;
        default: return state;
    }

}
export default reducer;