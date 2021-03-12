import ShoppingBasketHeader from '../shopping-basket-header/shopping-basket-header';
import ShoppingItem from '../shopping-item/shopping-item';
import './shopping-basket.css';
import EmptyShoppingBasket from '../empty-shopping-basket.js/empty-shopping-basket';
import ShoppingBasketFooter from '../shopping-basket-footer/shopping-ibasket-footer';

const ShoppingBasket = ({shoppingBasketItem, deleteAll,  onDecrease, onDeleteItem, onAdd}) =>{
    if(shoppingBasketItem.food.length === 0){
        return <EmptyShoppingBasket/>
    }else {}
    return (
        <div className='container'>
            <ShoppingBasketHeader deleteAll={deleteAll}/>
            <div className="line" ></div>
            <ShoppingItem shoppingBasketItem={shoppingBasketItem}  onDecrease={onDecrease} onDeleteItem={onDeleteItem} onAdd={onAdd} />
            <ShoppingBasketFooter shoppingBasketItem={shoppingBasketItem}/>
        </div>
    );
};

export default ShoppingBasket;