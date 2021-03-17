import React from 'react';

import './shopping-item.css';
const ShoppingItem =({shoppingBasketItem, onDecrease, onDeleteItem, onAdd})=>{
    if(shoppingBasketItem.food.length === 0){
        return null;
    }else{
        
        console.log(shoppingBasketItem.food);
        const food = shoppingBasketItem.food.map((item)=>{
            return <React.Fragment key={item.id}>
                <section className="item-section">
                    <img src="img/sushi-basket.png" className="mini-img" alt="item"/>
                    <div className="item-description">
                        <div className="item-title"><h3>{item.name}</h3></div>
                    </div>
                    <div className="item-count">
                        <img className="item-count-block"  src="img/btn-minus.svg" alt="minus" onClick={() => onDecrease(item.id)}/>
                        <div className="item-count-block item-count-label" >{item.count}</div>
                        <img className="item-count-block"  src="img/btn-plus.svg" alt="plus" onClick={()=> onAdd(item.id, item.name, item.price, item.id)}/>
                    </div>
                    <div className="item-price">{item.totalprice}</div>
                    <div>
                        <img className="item-count-delete" src="img/btn-delete.svg" alt="delete" onClick={() => onDeleteItem(item.id)}/>
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