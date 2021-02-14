import React from 'react';

import './shopping-item.css';
const ShoppingItem =()=>{
    return(
        <React.Fragment>
            <section className="item-section">
                <img src="/img/food/ciao/fungi.jpg" className="mini-img" alt="item"/>
                <div className="item-description">
                    <div className="item-title"><h3>Item Title</h3></div>
                </div>
                <div className="item-count">
                    <img className="item-count-block"  src="/img/btn-minus.svg" alt="minus"/>
                    <div className="item-count-block item-count-label" >2</div>
                    <img className="item-count-block"  src="/img/btn-plus.svg" alt="plus"/>
                </div>
                <div className="item-price">Item price</div>
                <div>
                    <img src="/img/btn-delete.svg" alt="delete"/>
                </div>
            </section>
            <div className="line" ></div>
        </React.Fragment>
  );
};
export default ShoppingItem;