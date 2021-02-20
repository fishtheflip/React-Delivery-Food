const INITIAL_STATE = { food: [], finalprice: 0}

const reducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){

        case 'ADD':
            return {...state, food:[...state.food, action.payload]};
        case 'INC_ITEM':
            return state;
        case 'DEC_ITEM':
            return state;
        case 'DELETE_ALL':
            return {food: [], finalprice: 0}
        default: return state;
    }

}
export default reducer;