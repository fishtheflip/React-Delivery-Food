import './shopping-basket-footer.css';

const ShoppingBasketFooter =({shoppingBasketItem})=>{
    return(
        <section className="shopping-footer">
            <div className="items-amount">
                
                <span className="items-title">Количество: </span><span className="items-title-bold">{shoppingBasketItem.count} шт</span>
            </div>
            
            <div className="delete-field" >
                <span className="total-price-title">Сумма заказа:</span><span className="total-price-title-bold">{shoppingBasketItem.finalprice} ₸</span>
            </div>
            
        </section>
    )
};
export default ShoppingBasketFooter;