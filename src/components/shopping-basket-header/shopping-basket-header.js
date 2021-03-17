import './shopping-basket-header.css';

const ShoppingBasketHeader = ({deleteAll}) =>{
    return(
        <section className="shopping-header">
            <div className="main-shop">
                <img src={'img/main-shop.svg'} alt="Logo" className="logo"/>
                <h2 className="shop-title">Корзина</h2>
            </div>
            
            <div className="delete-field" onClick={deleteAll}>
                <img src={'img/delete.svg'}  alt="delete" className="logo" />
                <h2 className="delete-title">Очистить корзину</h2>
            </div>
            
        </section>
    );
};
export default ShoppingBasketHeader; 