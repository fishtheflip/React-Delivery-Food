import { Component } from "react";

import './shopping-basket-header.css';

const ShoppingBasketHeader = () =>{
    return(
        <section className="shopping-header">
            <div className="main-shop">
                <img src={'/img/main-shop.svg'} alt="Logo" className="logo"/>
                <h2 className="shop-title">Корзина</h2>
            </div>
            <div className="delete-field">
                <img src={'/img/delete.svg'}  alt="delete" className="logo" />
                <h2 className="delete-title">Очистить корзину</h2>
            </div>
            
        </section>
    );
};
export default ShoppingBasketHeader; 