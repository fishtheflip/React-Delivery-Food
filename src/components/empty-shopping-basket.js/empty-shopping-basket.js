import "./empty-shoping-basket.css"
const EmptyShoppingBasket = ()=>{
    return(
        <section className="empty-basket-section">
            <div className="empty-basket-label">
                <label>
                    Корзина пока пустая 🍕 
                </label>
            </div>

            <div className="empty-basket-label-mini">
                <label>
                        Вероятнее всего, вы еще не делали заказ.
                </label>
                <label>
                        Для того, чтобы сделать заказ, перейдите на главную страницую
                </label>
            </div>
            <div className="empty-basket-img">
                <img src="/img/empty-basket.png" alt="empty"/>
            </div>
        </section>
    );
};
export default EmptyShoppingBasket; 