import ShoppingBasketHeader from '../shopping-basket-header/shopping-basket-header';
import ShoppingItem from '../shopping-item/shopping-item';
import './shopping-basket.css';
import EmptyShoppingBasket from '../empty-shopping-basket.js/empty-shopping-basket'

const ShoppingBasket = ({shoppingBasketItem}) =>{
    if(shoppingBasketItem.food.length === 0){
        return <EmptyShoppingBasket/>
    }else {}
    return (
        <div className='container'>
            <ShoppingBasketHeader/>
            <div className="line" ></div>
            <ShoppingItem shoppingBasketItem={shoppingBasketItem}/>
        </div>
    );
};

export default ShoppingBasket;