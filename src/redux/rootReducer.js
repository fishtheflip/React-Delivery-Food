const INITIAL_STATE = { food: [], finalprice: 0, count: 0}

const reducer = (state = INITIAL_STATE, action) =>{
    console.log(action.type);
    
    switch(action.type){

        case 'ADD':
            let got = action.payload;

            const IndexItem = state.food.findIndex(({id})=> id === got[3]);
            const itemCreate = state.food[IndexItem];
            
            let newItem;
            let currentPrice = got[2] + state.finalprice;
            let currentCounter = state.count + 1 ; 
            if(itemCreate){
                newItem={
                    ...itemCreate,
                    count: itemCreate.count + 1,
                    price:  got[2], 
                    totalprice: got[2] * (itemCreate.count + 1) 
                }
            }else{
                newItem ={
                    id: got[3],
                    name: got[1],
                    price: got[2],
                    count: 1,
                    totalprice: got[2]
                }
            }
            
            if(IndexItem < 0){
                return {count: currentCounter,finalprice: currentPrice, food:[...state.food, newItem]};
            } else{
                return {count: currentCounter,finalprice: currentPrice, food:[...state.food.slice(0, IndexItem), newItem, ...state.food.slice(IndexItem + 1)]};
            }

        case 'DEC_ITEM':
            const IndexItemDec = state.food.findIndex(({id})=> id === action.payload);
            const itemDec = state.food[IndexItemDec];
            console.log(itemDec);
            let newItemDec;
            if(itemDec.count > 1){
                newItemDec={
                    ...itemDec,
                    count: itemDec.count - 1,
                    totalprice: itemDec.totalprice - itemDec.price 
                }
            }else{
                let currentCounterDec = state.count - 1;
                let currentPriceDec = state.finalprice - itemDec.price;
                return {count: currentCounterDec,finalprice: currentPriceDec, food:[...state.food.slice(0, IndexItemDec),  ...state.food.slice(IndexItemDec + 1)]};
            }
            let currentCounterDec = state.count - 1;
            let currentPriceDec = state.finalprice - itemDec.price;
            console.log(newItemDec)
            return {count: currentCounterDec,finalprice: currentPriceDec, food:[...state.food.slice(0, IndexItemDec), newItemDec, ...state.food.slice(IndexItemDec + 1)]};

            return state;
        case 'DELETE_ALL':
            return {food: [], finalprice: 0, count: 0};

        case 'DEL_ITEM':
            const delItem = state.food.findIndex(({id})=> id === action.payload);
            let currentCounterDel = state.count - state.food[delItem].count;
            let currentPriceDel = state.finalprice - state.food[delItem].totalprice;
            return {count: currentCounterDel,finalprice: currentPriceDel, food:[...state.food.slice(0, delItem),  ...state.food.slice(delItem + 1)]};
        
        default: 
            return state;
    }

}
export default reducer;