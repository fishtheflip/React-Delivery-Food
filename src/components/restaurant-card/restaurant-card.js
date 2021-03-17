import './restaurant-card.css';


const RestaurantCard = ({id, img, price, title, food, onAdd, foodId}) =>{

    return(
        <div className="dynamic-card" id={id}>
        <img src={"img/food/" + img} alt="food" className="dynamic-card-image-restaurant"/>
        <div className="dynamic-card-text">
            <div className="dynamic-card-heading">
                <h3 className="dynamic-card-title dynamic-card-title-reg">{title}</h3>
                
            </div>
            <div className="dynamic-card-info">
                <div className="ingredients">{food}</div>
            </div>
            <div className="dynamic-card-buttons">
                <button className="button button-primary" id={id} onClick={()=> onAdd(id, title, price, foodId)}>
                    <span className="button-cadr-text" >В Корзину</span>
                    <img src="img/shopres.svg" alt="logo" className="dynamic-card-button-image"/>
                </button>
                <strong className="dynamic-card-price-bold">{price}₸</strong>
            </div>
        </div>
    </div>
    )
};

export default RestaurantCard; 