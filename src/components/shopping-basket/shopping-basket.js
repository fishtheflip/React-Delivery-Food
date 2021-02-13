import ShoppingBasketHeader from '../shopping-basket-header/shopping-basket-header';
import ShoppingItem from '../shopping-item/shopping-item';
import './shopping-basket.css';

const ShoppingBasket = () =>{
    return (
        <div className='container'>
            <ShoppingBasketHeader/>
            <div className="line" ></div>
            <ShoppingItem/>
        </div>
    );
};

export default ShoppingBasket;