import React from 'react';

import './shopping-item.css';
const ShoppingItem =({shoppingBasketItem})=>{
    if(shoppingBasketItem.food.length === 0){
        return null;
    }else{
        
        console.log(shoppingBasketItem.food);
        const food = shoppingBasketItem.food.map((item)=>{
            return <React.Fragment>
                <section className="item-section">
                    <img src="/img/food/ciao/fungi.jpg" className="mini-img" alt="item"/>
                    <div className="item-description">
                        <div className="item-title"><h3>{item[1]}</h3></div>
                    </div>
                    <div className="item-count">
                        <img className="item-count-block"  src="/img/btn-minus.svg" alt="minus"/>
                        <div className="item-count-block item-count-label" >1</div>
                        <img className="item-count-block"  src="/img/btn-plus.svg" alt="plus"/>
                    </div>
                    <div className="item-price">{item[2]}</div>
                    <div>
                        <img src="/img/btn-delete.svg" alt="delete"/>
                    </div>
                </section>
        <div className="line" ></div>
        </React.Fragment> 
        })
    return(
        <div>
            {food}
        </div>
  );
    }
};
export default ShoppingItem;